import React, { Component } from 'react';
import Dropdown from '../../components/Dropdown';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.card.title,
      priority: this.props.card.priority,
      assigned_to: this.props.card.assigned_to,
      cardId: this.props.card.id,
      disableInputs: true
    }

    this.titleChangeHandler = this.titleChangeHandler.bind(this);
    this.priorityChangeHandler = this.priorityChangeHandler.bind(this);
    this.assigneeChangeHandler = this.assigneeChangeHandler.bind(this);

    this.toggleInputs = this.toggleInputs.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleMoveRight = this.handleMoveRight.bind(this);
    this.handleMoveLeft = this.handleMoveLeft.bind(this);
  }

  titleChangeHandler(event) {
    const { value } = event.target
    this.setState({ title: value })
  };

  priorityChangeHandler(event) {
    const { value } = event.target
    this.setState({ priority: value })
  };

  assigneeChangeHandler(event) {
    const { value } = event.target
    this.setState({ assigned_to: value })
  };

  handleDelete() {
    return fetch('/cards/' + this.state.cardId, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(() => {
        return this.props.fetcher();
      })
  };

  handleEdit(event) {
    event.preventDefault();

    return fetch('/cards/' + this.state.cardId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        priority: this.state.priority,
        assigned_to: this.state.assigned_to
      })
    })
      .then(res => res.json())
      .then(() => {
        return this.props.fetcher();
      })
      .then(() => {
        return this.toggleInputs();
      })
  };

  handleMoveRight() {
    return fetch('/cards/' + this.state.cardId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: this.props.card.status + 1
      })
    })
      .then(res => res.json())
      .then(() => {
        return this.props.fetcher();
      })
  };

  handleMoveLeft() {
    return fetch('/cards/' + this.state.cardId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: this.props.card.status - 1
      })
    })
      .then(res => res.json())
      .then(() => {
        return this.props.fetcher();
      })
  };

  toggleInputs(event) {
    if (this.state.disableInputs === true) {
      return this.setState({ disableInputs: false });
    } else {
      return this.setState({ disableInputs: true });
    }
  };

  render() {
    return (
      <form className="card" draggable="true" onSubmit={this.handleEdit}>
      <div className="titleDiv" hidden={!this.state.disableInputs}>{this.state.title}</div>
        <input
          hidden={this.state.disableInputs}
          type="text"
          className="editTitle"
          name="title"
          value={this.state.title}
          onChange={this.titleChangeHandler}
        />
        <br />

        <label htmlFor="priority">Priority: </label>
        <select
          disabled={this.state.disableInputs}
          className="editPriority"
          name="priority"
          value={this.state.priority}
          onChange={this.priorityChangeHandler}
        >
          {this.props.priorities.map((pri) => {
            return <Dropdown key={pri.id} item={pri} />
          })}
        </select>
        <br />

        {
          this.props.users.filter((creator => {
            return creator.id === this.props.card.created_by
          }))
            .map((creator) => {
              return <div key={creator.id} className="creatorName">Created by: {creator.name}</div>
            })
        }

        <label htmlFor="assignee"> Assigned to: </label>
        <select
          disabled={this.state.disableInputs}
          className="editAssignee"
          name="assignee"
          value={this.state.assigned_to}
          onChange={this.assigneeChangeHandler}
        >
          <option value=''></option>
          {this.props.users.map(user => {
            return (
              <Dropdown key={user.id} item={user} />
            )
          })}
        </select>
        <br />

        <a onClick={this.toggleInputs}>Edit</a>
        <button className="submitEdit" hidden={this.state.disableInputs} type="submit">Submit</button>
        <a onClick={this.handleDelete}>Delete</a>
        <br/>

        {this.props.status > 1
          ? <button type="button" onClick={this.handleMoveLeft}>move left</button>
          : null}
        {this.props.status < 3
          ? <button type="button" onClick={this.handleMoveRight}>move right</button>
          : null}
      </form >
    )
  }
}

export default Card;
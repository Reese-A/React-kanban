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
      editing: false
    }

    this.titleChangeHandler = this.titleChangeHandler.bind(this);
    this.priorityChangeHandler = this.priorityChangeHandler.bind(this);
    this.assigneeChangeHandler = this.assigneeChangeHandler.bind(this);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleMoveRight = this.handleMoveRight.bind(this);
    this.handleMoveLeft = this.handleMoveLeft.bind(this);
  }

  titleChangeHandler(event) {
    const { value } = event.target
    this.setState({ title: value })
  }

  priorityChangeHandler(event) {
    const { value } = event.target
    this.setState({ priority: value })
  }

  assigneeChangeHandler(event) {
    const { value } = event.target
    this.setState({ assigned_to: value })
  }

  handleDelete(event) {
    event.preventDefault();

    return fetch('/cards/' + this.state.cardId, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(() => {
        return this.props.fetcher();
      })
  }

  handleMoveRight(event) {
    event.preventDefault();

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
  }

  handleMoveLeft(event) {
    event.preventDefault();

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
  }

  render() {
    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <input
          disabled="true"
          type="text"
          id="editTitle"
          name="title"
          value={this.state.title}
          onChange={this.titleChangeHandler}
        />
        <br/>

        <label htmlFor="priority">Priority: </label>
        <select
          disabled="true"
          id="editPriority"
          name="priority"
          value={this.state.priority}
          onChange={this.priorityChangeHandler}
        >
          {this.props.priorities.map((pri) => {
            return <Dropdown key={pri.id} item={pri} />
          })}
        </select>
        <br/>

        {
          this.props.users.filter((creator => {
            return creator.id === this.props.card.created_by
          }))
            .map((creator) => {
              return <div key={creator.id}>Created by: {creator.name}</div>
            })
        }

        <label htmlFor="assignee"> Assign to: </label>
        <select
          disabled="true"
          id="editAssignee"
          name="assignee"
          value={this.state.assigned_to}
          onChange={this.assigneeChangeHandler}
        >
          <option value={null}></option>
          {this.props.users.map(user => {
            return (
              <Dropdown key={user.id} item={user} />
            )
          })}
        </select>
        <br/>

        <button hidden="true" type="submit">Submit</button>

        <form onSubmit={this.handleDelete}>
          <button type="submit">Delete</button>
        </form>
        {this.props.status > 1
          ? <button type="button" onClick={this.handleMoveLeft}>move left</button>
          : null}
        {this.props.status < 3
          ? <button type="button" onClick={this.handleMoveRight}>move right</button>
          : null}
          <br/>
          <br/>
          <span>{this.state.title}</span>
          <span>{this.state.priority}</span>
          <span>{this.props.card.status}</span>
          <span>{this.state.assigned_to}</span>
          <br/>
          <br/>
      </form >

      // <div className="card">
      //   <h3>{this.props.card.title}</h3>
      //   {this.props.priorities.filter((pri => {
      //     return pri.id === this.props.card.priority
      //   }))
      //     .map((pri) => {
      //       return <div key={pri.id}>{pri.name}</div>
      //     })
      //   }

      //   {
      //     this.props.users.filter((creator => {
      //       return creator.id === this.props.card.created_by
      //     }))
      //       .map((creator) => {
      //         return <div key={creator.id}>Created by: {creator.name}</div>
      //       })
      //   }

      //   {
      //     this.props.users.filter((assignee => {
      //       return assignee.id === this.props.card.assigned_to
      //     }))
      //       .map((assignee) => {
      //         return <div key={assignee.id}>Assigned to: {assignee.name}</div>
      //       })
      //   }
      //   <br />
      //   <form onSubmit={this.handleDelete}>
      //     <button type="submit">Delete</button>
      //   </form>
      //   {this.props.status > 1
      //     ? <button type="button" onClick={this.handleMoveLeft}>move left</button>
      //     : null}
      //   {this.props.status < 3
      //     ? <button type="button" onClick={this.handleMoveRight}>move right</button>
      //     : null}
      //   <br />
      // </div >
    )
  }
}

export default Card;
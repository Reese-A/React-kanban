import React, { Component } from 'react';

import Dropdown from '../../components/Dropdown';

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      priority: '',
      status: '',
      created_by: '',
      assigned_to: ''
    }

    this.titleChangeHandler = this.titleChangeHandler.bind(this);
    this.priorityChangeHandler = this.priorityChangeHandler.bind(this);
    this.creatorChangeHandler = this.creatorChangeHandler.bind(this);
    this.assigneeChangeHandler = this.assigneeChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  titleChangeHandler(event) {
    const { value } = event.target
    this.setState({ title: value })
  }

  priorityChangeHandler(event) {
    const { value } = event.target
    this.setState({ priority: value })
  }

  creatorChangeHandler(event) {
    const { value } = event.target
    this.setState({ created_by: value })
  }

  assigneeChangeHandler(event) {
    const { value } = event.target
    this.setState({ assigned_to: value })
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('/cards', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        priority: this.state.priority,
        created_by: this.state.created_by,
        assigned_to: this.state.assigned_to
      })
    })
      .then(res => res.json())
      .then((card) => {
        return this.props.submitHandler(Object.assign({}, card))
      })
      .then(() => {
        this.setState({ title: '', author: '' });
      })
  }

  render() {
    return (
      <div id="newCardWrap">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter task title"
            value={this.state.title}
            onChange={this.titleChangeHandler}
          />

          <label htmlFor="priority">Priority: </label>
          <select
            id="cardPriority"
            name="priority"
            value={this.state.priority}
            onChange={this.priorityChangeHandler}
          >
            <option value={null}></option>
            {this.props.priorities.map((pri) => {
              return <Dropdown key={pri.id} item={pri} />
            })}
          </select>

          <label htmlFor="creator"> Created by: </label>
          <select
            id="createdBy"
            name="creator"
            value={this.state.created_by}
            onChange={this.creatorChangeHandler}
          >
            <option value={null}></option>
            {this.props.users.map(user => {
              return (
              <Dropdown key={user.id} item={user} />
              )
            })}
          </select>

          <label htmlFor="assignee"> Assign to: </label>
          <select
            id="assignedTo"
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

          <button type="submit">Submit</button>
        </form>
        <div className="form debugging">
          <span>{this.state.title} </span>
          <span>{this.state.priority} </span>
          <span>{this.state.created_by} </span>
          <span>{this.state.assigned_to} </span>
        </div>
      </div>
    )
  }
}

export default NewCardForm;
import React, { Component } from 'react';

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
            ref={input => this.textInput = input}
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
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
            <option value="4">Blocker</option>
          </select>
          <label htmlFor="creator"> Created by: </label>
          <select
            id="createdBy"
            name="creator"
            value={this.state.created_by}
            onChange={this.creatorChangeHandler}
          >
            {this.props.userList.map(user => {
              return (
                <option key={user.id} value={user.name}>{user.name}</option>
              )
            })
            }
          </select>
          <label htmlFor="assignee"> Assign to: </label>
          <select
            id="assignedTo"
            name="assignee"
            value={this.state.assigned_to}
            onChange={this.assigneeChangeHandler}
          >
            {this.props.userList.map(user => {
              return (
                <option key={user.id} value={user.name}>{user.name}</option>
              )
            })
            }
          </select>
          <button type="submit">Submit</button>
        </form>
        <div className="form debugging">
          <span>{this.state.title} </span>
          <span>{this.state.priority} </span>
          <span>{this.state.created_by }</span>
          <span>{this.state.assigned_to} </span>
        </div>
      </div>
    )
  }
}

export default NewCardForm;
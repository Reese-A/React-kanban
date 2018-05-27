import React, { Component } from 'react';

import Dropdown from '../../components/Dropdown';

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      priority: 1,
      created_by: 1,
      assigned_to: '',
      hideForm: true
    }

    this.toggleForm = this.toggleForm.bind(this);
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

    return this.props.submitHandler(Object.assign({}, this.state))
      .then(() => {
        this.setState({
          title: '',
          priority: '',
          created_by: '',
          assigned_to: ''
        });
      })
  }

  toggleForm() {
    if(this.state.hideForm === true){
      return this.setState({ hideForm: false });
    } else {
      return this.setState({ hideForm: true });
    }
  }


  render() {
    return (
      <div id="newCardWrap">
        <form id="newCard" onSubmit={this.handleSubmit} hidden={this.state.hideForm}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="newTitle"
            name="title"
            placeholder="Enter task title"
            value={this.state.title}
            onChange={this.titleChangeHandler}
          />

          <label htmlFor="priority">Priority: </label>
          <select
            id="newPriority"
            name="priority"
            value = {this.state.priority}
            onChange={this.priorityChangeHandler}
          >
            {this.props.priorities.map((pri) => {
              return <Dropdown key={pri.id} item={pri} />
            })}
          </select>

          <label htmlFor="creator"> Created by: </label>
          <select
            id="newCreator"
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
            id="newAssignee"
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
        <a id="newButton" onClick={this.toggleForm}>+ New Task</a>
        {/* <div className="form debugging">
          <span>{this.state.title} </span>
          <span>Priority: {this.state.priority} </span>
          <span>Creator: {this.state.created_by} </span>
          <span>Assignee: {this.state.assigned_to} </span>
        </div> */}
      </div>
    )
  }
}

export default NewCardForm;
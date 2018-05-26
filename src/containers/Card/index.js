import React, { Component } from 'react';


class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardId: this.props.card.id,
    }

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    event.preventDefault();

    return fetch('/cards/' + this.state.cardId, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => {
      return this.props.deleteHandler();
    })
  }

  render() {
    return (
      <div className="card" key={this.props.card.id} >
        <h3>{this.props.card.title}</h3>
        {this.props.priorities.filter((pri => {
          return pri.id === this.props.card.priority
        }))
          .map((pri) => {
            return <div key={pri.id}>{pri.name}</div>
          })
        }

        {
          this.props.users.filter((creator => {
            return creator.id === this.props.card.created_by
          }))
            .map((creator) => {
              return <div key={creator.id}>Created by: {creator.name}</div>
            })
        }

        {
          this.props.users.filter((assignee => {
            return assignee.id === this.props.card.assigned_to
          }))
            .map((assignee) => {
              return <div key={assignee.id}>Assigned to: {assignee.name}</div>
            })
        }
        <br />
        <form onSubmit={this.handleDelete}>
          <button type="submit">Delete</button>
        </form>
        <br />
      </div >
    )
  }



  // ({ card, priorities, users }) => {
  // return (
  //   <div className="card" key={card.id}>
  //     <h3>{card.title}</h3>
  //     {priorities.filter((pri => {
  //       return pri.id === card.priority
  //     }))
  //       .map((pri) => {
  //         return <div key={pri.id}>{pri.name}</div>
  //       })
  //     }

  //     {users.filter((creator => {
  //       return creator.id === card.created_by
  //     }))
  //       .map((creator) => {
  //         return <div key={creator.id}>Created by: {creator.name}</div>
  //       })
  //     }

  //     {users.filter((assignee => {
  //       return assignee.id === card.assigned_to
  //     }))
  //       .map((assignee) => {
  //         return <div key={assignee.id}>Assigned to: {assignee.name}</div>
  //       })
  //     }
  //     <br/>
  //     <form onSubmit={this.handleDelete}>
  //       <button type="submit">Delete</button>
  //     </form>
  //     <br/>
  //   </div>
  // )
}

export default Card;
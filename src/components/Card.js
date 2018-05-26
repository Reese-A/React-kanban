import React from 'react';

const Card = ({ card, priorities, users }) => {
  return (
    <div className="card" key={card.id}>
      <h3>{card.title}</h3>
      
      {priorities.filter((pri => {
        return pri.id === card.priority
      }))
        .map((pri) => {
          return <div key={pri.id}>{pri.name}</div>
        })
      }

      {users.filter((creator => {
        return creator.id === card.created_by
      }))
        .map((creator) => {
          return <div key={creator.id}>Created by: {creator.name}</div>
        })
      }
      
      {users.filter((assignee => {
        return assignee.id === card.assigned_to
      }))
        .map((assignee) => {
          return <div key={assignee.id}>Assigned to: {assignee.name}</div>
        })
      }
      <br/>
      <form onSubmit={this.handleDelete}>
        <button type="submit">Delete</button>
      </form>
      <br/>
    </div>
  )
}

export default Card;
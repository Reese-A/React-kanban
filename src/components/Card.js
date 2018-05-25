import React from 'react';

const Card = ({ card }) => {
  return(
    <div className = "card" key={card.id}>
      <h3>{card.title}</h3>
      <div>{card.priority.name}</div>
      <div>{card.created_by.name}</div>
      <div>{card.assigned_to.name}</div>
      <br/>
    </div>
  )
}

export default Card;
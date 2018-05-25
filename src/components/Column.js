import React from 'react';
import PropTypes from 'prop-types';

const Column = props => {
  return (<div className="column">
    <h2 className="statusName">{props.statusName}</h2>
    {props.cards.filter(card => {
      return card.status === props.statusId;
    })
      .map(card => {
        return (
          <div key={card.id} className="cardWrap">
            <h3 key={card.title} className="cardTitle">{card.title}</h3>
            {props.priorities.filter(pri => {
              return pri.id === card.priority;
            })
              .map(pri => {
                return <div key={card.priority} className="cardPriority">{pri.priority}</div>
              })
            }
            <div key={card.created_by}>Created by: {card.created_by}</div>
            <div key={card.assigned_to}>Assigned to: {card.assigned_to}</div>
            <br/>
          </div>
        )
      })
    }
    <br/>
  </div>
  )
}

export default Column;
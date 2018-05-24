import React from 'react';
import PropTypes from 'prop-types';

const Column = props => {
  return (<div>
    <div className="statusName">{props.statusName}</div>
    {props.cards.filter(card => {
      return card.status === props.statusId;
    })
      .map(card => {
        return (
          <div key={card.id}>
            <div key={card.title} className="cardTitle">{card.title}</div>
            <div key={card.priority} className="cardPriority">{card.priority}</div>
          </div>
        )
      })
    }
  </div>
  )}

export default Column;
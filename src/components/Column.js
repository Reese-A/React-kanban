import React from 'react';
import PropTypes from 'prop-types';
import Card from '../components/Card';

const Column = props => {
  return (<div className="column">
    <h2 className="statusName">{props.statusName}</h2>
    {props.cards.filter(card => {
      return card.status.id === props.statusId;
    })

      .map(card => {
        return (
          <Card key={card.id} card={card} />
          // <div key={card.id} className="cardWrap">
          //   <h3 key={card.title} className="cardTitle">{card.title}</h3>

          //   {props.priorities.filter(pri => {
          //     return pri.id === card.priority;
          //   })
          //     .map(pri => {
          //       return <div key={card.priority} className="cardPriority">{pri.name}</div>
          //     })}

          //   {props.users.filter(creator => {
          //     return creator.id === card.created_by;
          //   })
          //     .map(creator => {
          //       return <div key={card.created_by} className="cardCreator">Created by: {creator.name}</div>
          //     })}

          //   {props.users.filter(assignee => {
          //     return assignee.id === card.assigned_to;
          //   })
          //     .map(assignee => {
          //       return <div key={card.assigned_to} className="cardAssignee">Assigned to: {assignee.name}</div>
          //     })}
          //   <br />
          // </div>
        )
      })
    }
    <br />
  </div>
  )
}

export default Column;
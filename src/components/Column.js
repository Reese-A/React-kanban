import React from 'react';
import PropTypes from 'prop-types';
import Card from '../containers/Card';

const Column = props => {
  return (<div className="column">
    <h2 className="statusName">{props.statusName}</h2>
    {props.cards.filter(card => {
      return card.status === props.statusId;
    })

      .map(card => {
        return (
          <Card
          key={card.id} 
          card={card}
          status={props.statusId}
          priorities={props.priorities}
          users={props.users}
          fetcher={props.fetcher}
          />
        )
      })
    }
    <br/>
  </div>
  )
}

export default Column;
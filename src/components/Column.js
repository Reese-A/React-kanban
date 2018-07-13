import React from 'react';
import Card from '../containers/Card';

const Column = props => {
  return (
    <div className="column">
      <div className="statusName">{props.statusName.toUpperCase()}</div>
      <br />

      {props.cards
        .filter(card => {
          return card.status === props.statusId;
        })
        .map(card => {
          return (
            <Card
              key={card.id}
              card={card} // need to spread this
              status={props.statusId}
              priorities={props.priorities}
              users={props.users}
              fetcher={props.fetcher}
            />
          );
        })}
      <br />
    </div>
  );
};

export default Column;

import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = props => {
  return (
    <option key={props.item.id} value={props.item.id}>{props.item.name}</option>
  )
}

export default Dropdown;
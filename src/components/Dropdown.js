import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ item }) => {
  return (
    <option key={item.id} value={item.id}>{item.name}</option>
  )
}

export default Dropdown;
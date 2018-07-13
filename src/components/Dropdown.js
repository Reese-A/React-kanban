import React from 'react';

const Dropdown = ({ item }) => {
  return (
    <option key={item.id} value={item.id}>
      {item.name}
    </option>
  );
};

export default Dropdown;

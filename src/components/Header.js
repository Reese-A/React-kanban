import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => (
  <div className="header">
  <h1 id="headerTitle">{title}</h1>
  </div>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
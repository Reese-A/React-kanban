import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => (
  <div className="header">
  <div id="headerTitle">{title}</div>
  </div>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
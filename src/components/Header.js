import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => (
  <div id="headerTitle">{title}</div>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
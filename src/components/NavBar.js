import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';

const NavBar = ({ updateFilter }) => (
  <nav>
    <a href="/">Foody</a>
    <Filter updateFilter={updateFilter} />
    <a href="https://github.com/Spayco" target="_blank" rel="noopener noreferrer">By SpaYco</a>
  </nav>
);

NavBar.propTypes = {
  updateFilter: PropTypes.func.isRequired,
};

export default NavBar;

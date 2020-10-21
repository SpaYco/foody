import React from 'react';
import Filter from './Filter';

const NavBar = ({ updateFilter }) => (
  <nav>
    <a href="/">Foody</a>
    <Filter updateFilter={updateFilter} />
    <a href="https://github.com/Spayco" target="_blank" rel="noopener noreferrer">By SpaYco</a>
  </nav>
);

export default NavBar;

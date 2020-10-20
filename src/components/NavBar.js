import React from 'react';
import SearchBar from './SearchBar';

const NavBar = () => (
  <nav>
    <a href="/">Foody</a>
    <SearchBar />
    <a href="https://github.com/Spayco" target="_blank" rel="noopener noreferrer">By SpaYco</a>
  </nav>
);

export default NavBar;

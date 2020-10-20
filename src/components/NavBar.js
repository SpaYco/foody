import React from 'react';
import SearchBar from './SearchBar';

const NavBar = ({ updateIndex, updateSearch }) => (
  <nav>
    <p onClick={updateIndex('home')} aria-hidden>Foody</p>
    <SearchBar updateIndex={updateIndex} updateSearch={updateSearch} />
    <a href="https://github.com/Spayco" target="_blank" rel="noopener noreferrer">By SpaYco</a>
  </nav>
);

export default NavBar;

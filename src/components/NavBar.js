import React from 'react';
import SearchBar from './SearchBar';

const NavBar = ({ updateIndex, updateSearch }) => (
  <nav>
    <p>Hello World</p>
    <SearchBar updateIndex={updateIndex} updateSearch={updateSearch} />
  </nav>
);

export default NavBar;

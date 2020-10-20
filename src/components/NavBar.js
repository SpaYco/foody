import React from 'react';
import SearchBar from './SearchBar';

const NavBar = ({ updateIndex, updateSearch }) => {
  const handleClick = () => {
    updateIndex('home');
  };
  return (
    <nav>
      <p onClick={handleClick} aria-hidden>Foody</p>
      <SearchBar updateIndex={updateIndex} updateSearch={updateSearch} />
      <a href="https://github.com/Spayco" target="_blank" rel="noopener noreferrer">By SpaYco</a>
    </nav>
  );
};

export default NavBar;

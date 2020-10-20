import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

const NavBar = ({ updateIndex, updateSearch }) => {
  const handleClick = () => {
    updateIndex('home');
  };
  return (
    <nav>
      <a href="/">Foody</a>
      <SearchBar updateIndex={updateIndex} updateSearch={updateSearch} />
      <a href="https://github.com/Spayco" target="_blank" rel="noopener noreferrer">By SpaYco</a>
    </nav>
  );
};

NavBar.propTypes = {
  updateIndex: PropTypes.func.isRequired,
  updateSearch: PropTypes.func.isRequired,
};

export default NavBar;

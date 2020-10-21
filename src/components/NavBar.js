import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Filter from './Filter';

const NavBar = ({ updateFilter, filter }) => (
  <nav>
    <a href="/">Foody</a>
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Filter updateFilter={updateFilter} filter={filter} />}
        />
      </Switch>
    </BrowserRouter>
    <a href="https://github.com/Spayco" target="_blank" rel="noopener noreferrer">By SpaYco</a>
  </nav>
);

NavBar.propTypes = {
  updateFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default NavBar;

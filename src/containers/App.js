import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import RecipesList from './RecipesList';
import '../App.css';
import NavBar from '../components/NavBar';
import RecipeDetails from '../components/RecipeDetails';
import { updateFilter } from '../actions/index';

const App = ({ handleFilterUpdate }) => (
  <div>
    <NavBar updateFilter={handleFilterUpdate} />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RecipesList} />
        <Route path="/show/:id" component={RecipeDetails} />
      </Switch>
    </BrowserRouter>
  </div>
);

const mapStateToProps = state => ({ filter: state.filter });

const mapDispatchToProps = dispatch => ({
  handleFilterUpdate: filter => {
    dispatch(updateFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

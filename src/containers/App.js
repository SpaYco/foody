import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RecipesList from './RecipesList';
import '../App.css';
import NavBar from '../components/NavBar';
import RecipeDetails from './RecipeDetails';
import { updateSearch } from '../actions/index';

function App({
  handleUpdateSearch,
}) {
  return (
    <div>
      <NavBar updateSearch={handleUpdateSearch} />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={RecipesList} />
          <Route path="/show/:id" component={RecipeDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => ({ location: state.location, details: state.details });

const mapDispatchToProps = dispatch => ({
  handleUpdateSearch: data => {
    dispatch(updateSearch(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import { connect } from 'react-redux';
import RecipesList from './RecipesList';
import '../App.css';
import NavBar from './NavBar';
import RecipeDetails from './RecipeDetails';
import { updateIndex, updateData, updateSearch } from '../actions/index';

function App({
  location, handleUpdateIndex, handleUpdateSearch, details
}) {
  if (location === 'home') {
    return (
      <div className="App">
        <NavBar updateIndex={handleUpdateIndex} updateSearch={handleUpdateSearch} />
        <RecipesList updateIndex={handleUpdateIndex} />
      </div>
    );
  } if (location === 'detail') {
    return (
      <div className="App">
        <NavBar updateIndex={handleUpdateIndex} updateSearch={handleUpdateSearch} />
        <RecipeDetails data={details} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ location: state.location, details: state.details });

const mapDispatchToProps = dispatch => ({
  handleUpdateIndex: data => {
    dispatch(updateIndex(data));
  },
  handleUpdateData: data => {
    dispatch(updateData(data));
  },
  handleUpdateSearch: data => {
    dispatch(updateSearch(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

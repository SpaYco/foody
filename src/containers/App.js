import React from 'react';
import { connect } from 'react-redux';
import RecipesList from './RecipesList';
import '../App.css';
import NavBar from '../components/NavBar';
import RecipeDetails from '../components/RecipeDetails';
import { updateIndex, updateData, updateSearch } from '../actions/index';

function App({
  location, handleUpdateIndex, handleUpdateSearch, details,
}) {

  const apiKey = '82d92b6006f04945aa5cfa914b2a8821';
  if (location === 'home') {
    return (
      <div className="App">
        <NavBar updateIndex={handleUpdateIndex} updateSearch={handleUpdateSearch} />
        <RecipesList updateIndex={handleUpdateIndex} apiKey={apiKey} />
      </div>
    );
  } if (location === 'detail') {
    return (
      <div className="App">
        <NavBar updateIndex={handleUpdateIndex} updateSearch={handleUpdateSearch} />
        <RecipeDetails data={details} apiKey={apiKey} />
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

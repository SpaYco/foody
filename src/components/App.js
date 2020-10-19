import React from 'react';
import { connect } from 'react-redux';
import RecipesList from './RecipesList';
import '../App.css';
import NavBar from './NavBar';
import RecipeDetails from './RecipeDetails';
import { updateIndex } from '../actions/index';

function App({ location, handleUpdateIndex }) {
  if (location === 'home') {
    return (
      <div className="App">
        <NavBar />
        <RecipesList updateIndex={handleUpdateIndex} />
      </div>
    );
  } if (location === 'detail') {
    return (
      <div className="App">
        <NavBar />
        <RecipeDetails />
      </div>
    );
  }
}

const mapStateToProps = state => ({ location: state.location });

const mapDispatchToProps = dispatch => ({
  handleUpdateIndex: data => {
    dispatch(updateIndex(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

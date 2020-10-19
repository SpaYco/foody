import React from 'react';
import { connect } from 'react-redux';
import RecipesList from './RecipesList';
import '../App.css';
import NavBar from './NavBar';
import RecipeDetails from './RecipeDetails';
import { updateIndex, showData, updateSearch } from '../actions/index';

function App({ location, handleUpdateIndex, handleUpdateSearch, search }) {
  if (location === 'home') {
    return (
      <div className="App">
        <NavBar updateIndex={handleUpdateIndex} updateSearch={handleUpdateSearch}/>
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

const mapStateToProps = state => ({ location: state.location, search: state.search});

const mapDispatchToProps = dispatch => ({
  handleUpdateIndex: data => {
    dispatch(updateIndex(data));
  },
  handleShowData: data => {
    dispatch(showData(data));
  },
  handleUpdateSearch: data => {
    dispatch(updateSearch(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

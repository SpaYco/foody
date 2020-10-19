import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchRecipe } from '../actions/index';
import Recipe from './Recipe';

class RecipesList extends React.Component {

  async componentDidMount() {
    const recipes = await fetch('https://api.spoonacular.com/recipes/complexSearch?number=5&apiKey=5cbaa86b61b54ebeaf466e7cc2be0e90');
    const jsonRecipes = await recipes.json();
    this.updateRecipe(jsonRecipes.results);
  }

  getRecipe() {
    const { recipes, updateIndex } = this.props;
    const result = [];

    for (let i = 0; i < recipes.length; i += 1) {
      result.push(
        <Recipe data={recipes[i]} handleUpdateIndex={updateIndex} />,
      );
    }
    return result;
  }

  updateRecipe(recipes) {
    const { handleRecipesSearch } = this.props;
    handleRecipesSearch(recipes);
  }

  render() {
    return (
      <div className="App">
        {this.getRecipe()}
      </div>
    );
  }
}

RecipesList.propTypes = {
  handleRecipesSearch: PropTypes.func.isRequired,
  recipes: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  updateIndex: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ recipes: state.recipes, filter: state.filter });

const mapDispatchToProps = dispatch => ({
  handleRecipesSearch: Recipes => {
    dispatch(searchRecipe(Recipes));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);

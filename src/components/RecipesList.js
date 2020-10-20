import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchRecipe, updateData } from '../actions/index';
import Recipe from './Recipe';

class RecipesList extends React.Component {
  async componentDidMount() {
    const { search, apiKey } = this.props;
    const recipes = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=5&apiKey=${apiKey}&query=${search}`);
    const jsonRecipes = await recipes.json();
    this.updateRecipe(jsonRecipes.results);
  }

  async componentDidUpdate(prevProps) {
    const { search, apiKey } = this.props;
    if (prevProps.search !== search && search !== 'couscous') {
      const recipes = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=5&apiKey=${apiKey}&query=${search}`);
      const jsonRecipes = await recipes.json();
      this.updateRecipe(jsonRecipes.results);
    }
  }

  getRecipe() {
    const { recipes, updateIndex, handleUpdateData } = this.props;
    const result = [];

    for (let i = 0; i < recipes.length; i += 1) {
      result.push(
        <Recipe
          key={recipes[i].id}
          data={recipes[i]}
          handleUpdateIndex={updateIndex}
          handleUpdateData={handleUpdateData}
        />,
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
      <div id="list">
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
  search: PropTypes.string,
  handleUpdateData: PropTypes.func.isRequired,
  apiKey: PropTypes.string.isRequired,
};

RecipesList.defaultProps = {
  search: 'cousous',
};

const mapStateToProps = state => ({ recipes: state.recipes, search: state.search });

const mapDispatchToProps = dispatch => ({
  handleRecipesSearch: Recipes => {
    dispatch(searchRecipe(Recipes));
  },
  handleUpdateData: data => {
    dispatch(updateData(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);

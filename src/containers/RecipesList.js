import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchRecipe } from '../actions/index';
import Recipe from '../components/Recipe';

const search = window.sessionStorage.getItem('search') || 'pizza';

class RecipesList extends React.Component {
  async componentDidMount() {
    const recipes = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=20&apiKey=5ee23a487fb74aea82f1546cd110c8cc&query=${search}`).then(element => element.json()).catch(error => error);
    this.updateRecipe(recipes.results);
  }

  getRecipe() {
    const { recipes } = this.props;
    const result = [];
    for (let i = 0; i < recipes.length; i += 1) {
      result.push(
        <Recipe
          key={recipes[i].id}
          data={recipes[i]}
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
  recipes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    length: PropTypes.number,
  })).isRequired,
};
const mapStateToProps = state => ({ recipes: state.recipes });

const mapDispatchToProps = dispatch => ({
  handleRecipesSearch: Recipes => {
    dispatch(searchRecipe(Recipes));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);

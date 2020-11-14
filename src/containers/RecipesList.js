import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchRecipe } from '../actions/index';
import Recipe from '../components/Recipe';

class RecipesList extends React.Component {
  async componentDidMount() {
    const { filter } = this.props;
    const recipes = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=20&apiKey=b06964b56acb4ce2a6eb9eb97a9248d5&query=${filter}`).then(element => element.json()).catch(error => error);
    this.updateRecipe(recipes.results);
  }

  async componentDidUpdate(prevProps) {
    const { filter } = await this.props;
    if (prevProps.filter !== filter) {
      const recipes = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=20&apiKey=f9e73470d29c49f197ad3b8d36743cea&query=${filter}`).then(element => element.json()).catch(error => error);
      this.updateRecipe(recipes.results);
    }
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
  filter: PropTypes.string.isRequired,
};
const mapStateToProps = state => ({ recipes: state.recipes, filter: state.filter });

const mapDispatchToProps = dispatch => ({
  handleRecipesSearch: recipes => {
    dispatch(searchRecipe(recipes));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);

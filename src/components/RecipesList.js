import React from 'react';
import Recipe from './Recipe';

class RecipesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { recipes: {} };
  }

  async componentDidMount() {
    const recipes = await fetch('https://api.spoonacular.com/recipes/complexSearch?number=5&apiKey=5cbaa86b61b54ebeaf466e7cc2be0e90');
    const jsonRecipes = await recipes.json();
    this.updateRecipe(jsonRecipes.results);
  }

  getRecipe() {
    const { recipes } = this.state;
    const result = [];

    for (let i = 0; i < recipes.length; i += 1) {
      result.push(
        <Recipe data={recipes[i]} />,
      );
    }
    return result;
  }

  updateRecipe(recipes) {
    this.setState({ recipes });
  }

  render() {
    return (
      <div className="App">
        {this.getRecipe()}
      </div>
    );
  }
}

export default RecipesList;

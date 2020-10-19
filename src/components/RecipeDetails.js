import React from 'react';
import PropTypes from 'prop-types';

class RecipeDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  async componentDidMount() {
    const { data } = this.props;
    const recipe = await fetch(`https://api.spoonacular.com/recipes/${data.id}/information?apiKey=95dfa1e76ccb46e7838d6982e6517d79`);
    const jsonRecipe = await recipe.json();
    this.setState(jsonRecipe);
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <img src={data.image} alt={data.title} />
        <p>{data.title}</p>
      </div>
    );
  }
}

RecipeDetails.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default RecipeDetails;

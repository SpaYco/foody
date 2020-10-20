import React from 'react';
import PropTypes from 'prop-types';
import Interweave from 'interweave';

class RecipeDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = { details: {} };
  }

  async componentDidMount() {
    const { data, apiKey } = this.props;
    const recipe = await fetch(`https://api.spoonacular.com/recipes/${data.id}/information?apiKey=${apiKey}`);
    const jsonRecipe = await recipe.json();
    this.setState({ details: jsonRecipe });
  }

  classType = arg => {
    if (arg === true) {
      return 'green-checkmark';
    }
    return 'red-checkmark';
  }

  render() {
    const { data } = this.props;
    const { details } = this.state;
    return (
      <div className="details-section">
        <div className="details-tab">
          <img src={data.image} alt={data.title} />
          <p>{data.title}</p>
        </div>
        <div>
          <div className="types">
            <h1>Types:</h1>
            <div className={this.classType(details.vegetarian)}>vegetarian</div>
            <div className={this.classType(details.vegan)}>vegan</div>
            <div className={this.classType(details.glutenFree)}>gluten Free</div>
            <div className={this.classType(details.dairyFree)}>dairy Free</div>
            <div className={this.classType(details.veryHealthy)}>very Healthy</div>
          </div>
          <div className="kinds">
            <h1>Kinds:</h1>
            <div className={this.classType(details.cheap)}>cheap</div>
            <div className={this.classType(details.veryPopular)}>very Popular</div>
            <div className={this.classType(details.sustainable)}>sustainable</div>
          </div>
          <div className="summary">
            <h1>Summary:</h1>
            <Interweave
              content={details.summary}
            />
            ;
          </div>
        </div>
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
  apiKey: PropTypes.string.isRequired,
};

export default RecipeDetails;

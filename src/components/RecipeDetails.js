import React from 'react';
import Interweave from 'interweave';

const id = window.location.pathname.split('/')[2];

class RecipeDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = { details: {} };
  }

  async componentDidMount() {
    const recipe = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=413aa67d21ca4a38b2a4cb88350bcc6a`).catch(error => error);
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
    const { details } = this.state;
    return (
      <div id="details-section">
        <div id="details-tab">
          <img src={details.image} alt={details.title} />
          <p>{details.title}</p>
        </div>
        <div id="details">
          <div className="types">
            <h1>Types:</h1>
            <div className="detail-btns">
              <div className={this.classType(details.vegetarian)}>vegetarian</div>
              <div className={this.classType(details.vegan)}>vegan</div>
              <div className={this.classType(details.glutenFree)}>gluten Free</div>
              <div className={this.classType(details.dairyFree)}>dairy Free</div>
              <div className={this.classType(details.veryHealthy)}>very Healthy</div>
            </div>
          </div>
          <div className="kinds">
            <h1>Kinds:</h1>
            <div className="detail-btns">
              <div className={this.classType(details.cheap)}>cheap</div>
              <div className={this.classType(details.veryPopular)}>very Popular</div>
              <div className={this.classType(details.sustainable)}>sustainable</div>
            </div>
          </div>
          <div id="summary">
            <h1>Summary:</h1>
            <Interweave
              content={details.summary}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeDetails;

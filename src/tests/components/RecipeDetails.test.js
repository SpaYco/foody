import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import RecipeDetails from '../../components/RecipeDetails';
import 'jest-canvas-mock';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const fakeData = {
  id: 1095817,
  vegetarian: true,
  vegan: true,
  glutenFree: true,
  dairyFree: true,
  veryHealthy: false,
  cheap: false,
  veryPopular: false,
  sustainable: false,
  summary: 'If you want to add more <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> recipes to your collection, Super Food Trail Mix might be a recipe you should try. This recipe serves 4. One portion of this dish contains around <b>6g of protein</b>, <b>16g of fat</b>, and a total of <b>204 calories</b>. For <b>$1.24 per serving</b>, this recipe <b>covers 8%</b> of your daily requirements of vitamins and minerals. This recipe from Foodista requires almonds, blueberries, goji berries, and pumpkin seeds. Not a lot of people made this recipe, and 1 would say it hit the spot. This recipe is typical of Mediterranean cuisine. It works well as a reasonably priced side dish. From preparation to the plate, this recipe takes approximately <b>5 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 54%</b>, which is pretty good. Try <a href="https://spoonacular.com/recipes/tropical-foods-trail-mix-brittle-663857">Tropical Food’s Trail Mix Brittle</a>, <a href="https://spoonacular.com/recipes/super-chunky-trail-mix-cookies-white-whole-wheat-flour-171751">Super Chunky Trail Mix Cookies (White Whole Wheat Flour)</a>, and <a href="https://spoonacular.com/recipes/super-friendly-trail-mix-cereal-bars-easy-sweet-crispy-chewy-680243">Super-Friendly Trail Mix Cereal Bars (Easy, Sweet, Crispy, Chewy!)</a> for similar recipes.',
  image: 'https://spoonacular.com/recipeImages/1095817-636x393.jpg',
  title: 'Super Food Trail Mix',
};

describe('RecipeDetails', () => {
  it('renders gives the prop classes to false types or kinds', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(fakeData),
    }));
    await act(async () => {
      render(<RecipeDetails />, container);
    });

    expect(container.querySelector('.red-checkmark').textContent).toBe('very Healthy');

    global.fetch.mockRestore();
  });

  it('renders gives the prop classes to true types or kinds', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(fakeData),
    }));
    await act(async () => {
      render(<RecipeDetails />, container);
    });

    expect(container.querySelector('.green-checkmark').textContent).toBe('vegetarian');

    global.fetch.mockRestore();
  });

  it('contains a summary', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(fakeData),
    }));
    await act(async () => {
      render(<RecipeDetails />, container);
    });

    expect(container.textContent).toContain('gluten free, dairy free, paleolithic, and lacto ovo vegetarian');

    global.fetch.mockRestore();
  });

  it('contains a image', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(fakeData),
    }));
    await act(async () => {
      render(<RecipeDetails />, container);
    });

    expect(container.querySelector('img').src).toBe('https://spoonacular.com/recipeImages/1095817-636x393.jpg');

    global.fetch.mockRestore();
  });
});

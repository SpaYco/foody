import React from 'react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render, unmountComponentAtNode } from 'react-dom';
import rootReducer from '../../reducers/index';
import RecipesList from '../../containers/RecipesList';
import 'jest-canvas-mock';

const store = createStore(rootReducer);

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
  results: [{
    id: 1095817,
    title: 'Super Food Trail Mix',
    image: 'https://spoonacular.com/recipeImages/1095817-312x231.jpg',
  }, {
    id: 632363,
    title: 'Angel Food Cake With Lemon Icing',
    image: 'https://spoonacular.com/recipeImages/632363-312x231.jpg',
  }],
};

describe('RecipesList', () => {
  it('renders adds an image', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(fakeData),
    }));
    await act(async () => {
      render(<Provider store={store}><RecipesList /></Provider>, container);
    });

    expect(container.querySelector('img').src).toBe('https://spoonacular.com/recipeImages/1095817-312x231.jpg');

    global.fetch.mockRestore();
  });
  it('renders adds a title', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(fakeData),
    }));
    await act(async () => {
      render(<Provider store={store}><RecipesList /></Provider>, container);
    });

    expect(container.querySelector('a').textContent).toBe('Super Food Trail Mix');

    global.fetch.mockRestore();
  });
});

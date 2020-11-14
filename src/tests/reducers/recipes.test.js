import recipesReducer from '../../reducers/recipes';
import { searchRecipe } from '../../actions/index';

const fakeSearchRecipe = data => ({
  type: 'hey there',
  data,
});

const state = [];

describe('Recipes Reducer', () => {
  it('returns samme state if no data type is given', () => {
    const recipes = recipesReducer(state, fakeSearchRecipe('sup bro'));
    expect(recipes).toEqual([]);
  });
  it('returns a new state if no data type is given', () => {
    const recipes = recipesReducer(state, searchRecipe(['sup bro']));
    expect(recipes).toEqual(['sup bro']);
  });
});

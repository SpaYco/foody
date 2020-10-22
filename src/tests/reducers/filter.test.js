import filterReducer from '../../reducers/filter';
import { updateFilter } from '../../actions/index';

const fakeFilterRecipe = data => ({
  type: 'hey there',
  data,
});

const state = 'Pizza';

describe('Filter Reducer', () => {
  it('returns samme state if no data type is given', () => {
    const recipes = filterReducer(state, fakeFilterRecipe('sup bro'));
    expect(recipes).toEqual('Pizza');
  });
  it('returns a new state if no data type is given', () => {
    const recipes = filterReducer(state, updateFilter('sup bro'));
    expect(recipes).toEqual('sup bro');
  });
});

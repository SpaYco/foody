import { SEARCH_RECIPE, searchRecipe } from '../../actions/index';

describe('main actions', () => {
  it('contains SEARCH_RECIPE variable', () => {
    expect(SEARCH_RECIPE).toBe('SEARCH_RECIPE');
  });
  it('searchRecipe returns an object', () => {
    const result = searchRecipe('hello');
    expect(typeof result).toBe('object');
  });
  it('searchRecipe returns an object with data', () => {
    const result = searchRecipe('hello');
    expect(result.data).toBe('hello');
  });

  it('searchRecipe returns an object with type', () => {
    const result = searchRecipe('hello');
    expect(result.type).toBe(SEARCH_RECIPE);
  });
});

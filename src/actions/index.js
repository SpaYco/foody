export const SEARCH_RECIPE = 'SEARCH_RECIPE';

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const searchRecipe = data => ({
  type: SEARCH_RECIPE,
  data,
});

export const updateFilter = data => ({
  type: UPDATE_FILTER,
  data,
});

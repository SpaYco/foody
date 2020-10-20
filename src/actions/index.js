export const SEARCH_RECIPE = 'SEARCH_RECIPE';

export const UPDATE_DETAIL = 'UPDATE_DETAIL';

export const UPDATE_SEARCH = 'UPDATE_SEARCH';

export const searchRecipe = data => ({
  type: SEARCH_RECIPE,
  data,
});

export const updateData = data => ({
  type: UPDATE_DETAIL,
  data,
});

export const updateSearch = data => ({
  type: UPDATE_SEARCH,
  data,
});

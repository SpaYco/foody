export const SEARCH_RECIPE = 'SEARCH_RECIPE';

export const SHOW_DETAIL = 'SHOW_DETAIL';

export const UPDATE_INDEX = 'UPDATE_INDEX';

export const searchRecipe = data => ({
  type: SEARCH_RECIPE,
  data,
});

export const updateIndex = data => ({
  type: UPDATE_INDEX,
  data,
});

export const showData = data => ({
  type: SHOW_DETAIL,
  data,
});

import { SEARCH_RECIPE } from '../actions/index';

const INITIAL_STATE = [];

const recipesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_RECIPE:
      return action.data;
    default:
      return [...state];
  }
};

export default recipesReducer;

import { UPDATE_SEARCH } from '../actions/index';

const INITIAL_STATE = 'couscous';

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return action.data;
    default:
      return state;
  }
};

export default searchReducer;

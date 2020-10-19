import { UPDATE_DETAIL } from '../actions/index';

const INITIAL_STATE = { };

const detailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_DETAIL:
      return action.data;
    default:
      return state;
  }
};

export default detailsReducer;

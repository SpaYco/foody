import { UPDATE_INDEX } from '../actions/index';

const INITIAL_STATE = 'home';

const locationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_INDEX:
      return action.data;
    default:
      return state;
  }
};

export default locationReducer;

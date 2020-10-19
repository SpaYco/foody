import { combineReducers } from 'redux';
import recipesRecuder from './recipes';
import detailsReducer from './details';
import locationReducer from './location';

const rootReducer = combineReducers({
  details: detailsReducer,
  recipes: recipesRecuder,
  location: locationReducer,
});

export default rootReducer;

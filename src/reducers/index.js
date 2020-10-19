import { combineReducers } from 'redux';
import recipesRecuder from './recipes';
import detailsReducer from './details';
import locationReducer from './location';
import searchReducer from './search';

const rootReducer = combineReducers({
  details: detailsReducer,
  recipes: recipesRecuder,
  location: locationReducer,
  search: searchReducer,
});

export default rootReducer;

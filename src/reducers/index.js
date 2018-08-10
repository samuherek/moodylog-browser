import { combineReducers } from 'redux';

// Reducers
import profileReducer from './profileReducer';
import uiReducer from './uiReducer';

// Combine Reducers
const reducers = combineReducers({
  profile: profileReducer,
  ui: uiReducer
});

export default reducers;

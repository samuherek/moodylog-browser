import { combineReducers } from 'redux';

// Reducers
import authReducer from './authReducer';
import uiReducer from './uiReducer';

// Combine Reducers
const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer
});

export default reducers;

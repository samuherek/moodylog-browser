import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function uiReducer(state = initialState.ui, action) {
  switch (action.type) {
    case types.SET_LOG_TIMEOUT: {
      const { key } = action.payload;
      return {
        ...state,
        [`${key}Timeout`]: true
      };
    }

    case types.CANCEL_LOG_TIMEOUT: {
      const { key } = action.payload;
      return {
        ...state,
        [`${key}Timeout`]: false
      };
    }

    default:
      return state;
  }
}

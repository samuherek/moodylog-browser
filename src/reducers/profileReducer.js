import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function profileReducer(state = initialState.profile, action) {
  switch (action.type) {
    case types.AUTH_DONE: {
      return {
        ...state,
        loading: false
      };
    }

    case types.SIGN_IN: {
      const { user } = action.payload;
      return {
        ...state,
        email: user.email,
        displayName: user.displayName ? user.displayName : 'Anonymous',
        uid: user.uid,
        verified: user.emailVerified
      };
    }

    case types.SIGN_OUT:
      return {
        ...initialState.auth
      };

    // case types.RECEIVED_AUTH_TOKEN: {
    //   const { token } = action.payload;
    //   return {
    //     ...state,
    //     token
    //   };
    // }

    default:
      return state;
  }
}

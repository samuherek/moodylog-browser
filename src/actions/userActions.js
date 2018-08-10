import * as types from './actionTypes';
import { auth, firestore } from '../firebase';

export function updateProfile(profileChanges) {
  return {
    type: types.UPDATE_PROFILE_VALUE,
    payload: {
      profileChanges
    }
  };
}

// MIDDLEWARE
export function updateProfileInDb(updatedValues) {
  return function updateProfileInDbThunk(dispatch, getState) {
    const doc = firestore.collection('users').doc(auth.currentUser.uid);

    return doc
      .update(updatedValues)
      .then(result => {
        dispatch(updateProfile(updatedValues));
        return;
      })
      .catch(error => {
        console.log('Error while creating', error);
      });
  };
}

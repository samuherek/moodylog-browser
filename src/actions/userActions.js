import * as types from './actionTypes';
import { auth, firestore, uidKey } from '../firebase';

export function userProfilFetched(user) {
  return {
    type: types.SET_LOG_TIMEOUT,
    payload: {
      key
    }
  };
}

// export function cancelLogTimeout(key) {
//   return {
//     type: types.CANCEL_LOG_TIMEOUT,
//     payload: {
//       key
//     }
//   };
// }

// MIDDLEWARE
// export function logMoodToDB(value) {
//   return function logMoodToDBThunk(dispatch, getState) {
//     const timeSplit = new Date().toString().split(' ');

//     const doc = firestore
//       .collection('users')
//       .doc(auth.currentUser.uid)
//       .collection('moods')
//       .doc();

//     return doc
//       .set({
//         mood: value,
//         timestamp: +new Date()
//         // date: `${timeSplit[0]} ${timeSplit[1]} ${timeSplit[2]} ${timeSplit[3]}`,
//         // time: `${timeSplit[4]} ${timeSplit[5]} ${timeSplit[6]}`
//       })
//       .then(result => {
//         setupLogTimeout(dispatch, 'mood');
//         return 'done';
//       })
//       .catch(error => {
//         console.log('Error while creating', error);
//       });
//   };
// }

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBBkUtrsjP4ip1VJDzKT73erUxaoUDnKws',
  authDomain: 'moodylog-5deac.firebaseapp.com',
  databaseURL: 'https://moodylog-5deac.firebaseio.com',
  projectId: 'moodylog-5deac'
  // storageBucket: 'safepro-90ebd.appspot.com',
  // messagingSenderId: '645585433650'
};

firebase.initializeApp(config);

export default firebase;

// export const database = firebase.database();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
// COMMENT: firestore is changing the date storage and this removes the warning from console
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
// COMMENT: enable firestore persistance
firestore.enablePersistence().catch(function(err) {
  if (err.code == 'failed-precondition') {
    // Multiple tabs open, persistence can only be enabled
    // in one tab at a a time.
    // ...
    console.log('Multiple tabs not working with persistance');
  } else if (err.code == 'unimplemented') {
    // The current browser does not support all of the
    // features required to enable persistence
    // ...
    console.log("Current browser doesn't support firestore persistance");
  }
});

export const uidKey = 'KEY_FOR_LOCAL_STORAGE_UID';
export const dataKey = 'KEY_FOR_LOCAL_STORAGE_DATA';
export const timestampKey = 'KEY_FOR_LOCAL_STORAGE_TIMESTAMP';
// export const AUTH_SUCCESS = 'AUTH_SUCCESS';
// export const AUTH_FAILURE = 'AUTH_FAILURE';

export class fireAuth {
  static isAuthenticated = (): Boolean => !!auth.currentUser || !!localStorage.getItem(uidKey);

  static getCurrentUser = (): Object => auth.currentUser;

  static getToken = (): string => auth.currentUser.getidToken();

  static getDisplayName = (): string => fireAuth.getCurrentUser().displayName || 'Anonymous';

  static startListeningToAuthChanges = (onSignInCb: () => void, onSignOutCb: () => void) => {
    const localUser = localStorage.getItem(uidKey);
    return auth.onAuthStateChanged(user => {
      if (user) {
        if (!localUser || localUser !== user) {
          localStorage.setItem(uidKey, user.uid);
        }
        onSignInCb();
      } else {
        onSignOutCb();
      }
    });
  };

  static logIn = () => {};

  static logOut = () => {};
}

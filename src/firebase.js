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
export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const uidKey = 'KEY_FOR_LOCAL_STORAGE_UID';
export const dataKey = 'KEY_FOR_LOCAL_STORAGE_DATA';
export const timestampKey = 'KEY_FOR_LOCAL_STORAGE_TIMESTAMP';

export const isAuthenticated = () => {
  // console.log(auth.currentUser, !!auth.currentUser);
  return !!auth.currentUser || !!localStorage.getItem(uidKey);
};
export const getCurrentUser = () => {
  return auth.currentUser;
};

export const getToken = () => {
  return auth.currentUser.getIdToken();
};

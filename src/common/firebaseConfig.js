import * as firebase from 'firebase/app';
import * as Constants from './constants';
import 'firebase/auth';

export const firebaseConfig = {
  apiKey: Constants.API_KEY,
  authDomain: 'hacosareactweather.firebaseapp.com',
  databaseURL: 'https://hacosareactweather.firebaseio.com',
  projectId: 'hacosareactweather',
  storageBucket: 'hacosareactweather.appspot.com',
  messagingSenderId: '1038726577815',
  appId: '1:1038726577815:web:8eec5acfabf2245acef3d2',
  measurementId: 'G-Q7E9MV7R2F',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
export default firebase;

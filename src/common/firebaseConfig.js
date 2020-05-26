import * as firebase from 'firebase/app';
import 'firebase/auth';

import * as Constants from './constants';

export const firebaseConfig = {
  apiKey: Constants.API_KEY,
  authDomain: 'hacosareactweather.firebaseapp.com',
  databaseURL: 'https://hacosareactweather.firebaseio.com',
  projectId: 'hacosareactweather',
  storageBucket: 'hacosareactweather.appspot.com',
  messagingSenderId: '1038726577815',
  appId: '1:1038726577815:web:59be8bf84d2e26fecef3d2',
  measurementId: 'G-VQFP290LTK',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;

import * as firebase from 'firebase';

const firebaseApp =firebase.initializeApp({
  apiKey: "AIzaSyCyiZyLde3bPXz7ovQaI_s_ZhdcT1Qi7cs",
  authDomain: "padho-2a25f.firebaseapp.com",
  projectId: "padho-2a25f",
  storageBucket: "padho-2a25f.appspot.com",
  messagingSenderId: "908061296687",
  appId: "1:908061296687:web:0ea226ab7f239b4fbc1eda",
  measurementId: "G-7EQQ293RX8"
});

const auth = firebase.auth();

export {auth};
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAmBvpuO3WxZXrcbE67xurpdjvYtMYj5tM',
  authDomain: 'would-you-rather-c100d.firebaseapp.com',
  databaseURL: 'https://would-you-rather-c100d.firebaseio.com',
  projectId: 'would-you-rather-c100d',
  storageBucket: 'gs://would-you-rather-c100d.appspot.com',
  messagingSenderId:'672440538922'
});


// REACT_APP_FIREBASE_KEY='AIzaSyAmBvpuO3WxZXrcbE67xurpdjvYtMYj5tM'
// REACT_APP_FIREBASE_DOMAIN='would-you-rather-c100d.firebaseapp.com'
// REACT_APP_FIREBASE_DATABASE='https://would-you-rather-c100d.firebaseio.com'
// REACT_APP_FIREBASE_PROJECT_ID='would-you-rather-c100d'
// REACT_APP_FIREBASE_STORAGE_BUCKET='gs://would-you-rather-c100d.appspot.com'
// REACT_APP_FIREBASE_SENDER_ID='672440538922'


// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
// });

  console.log(firebaseApp);

export default firebaseApp;

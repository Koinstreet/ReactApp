import firebase from 'firebase'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCmm9JaPHJ9jSIRGBWHkJv8c8aCrxL61wY",
    authDomain: "koinstreet-app-fb903.firebaseapp.com",
    databaseURL: "https://koinstreet-app-fb903.firebaseio.com",
    projectId: "koinstreet-app-fb903",
    storageBucket: "koinstreet-app-fb903.appspot.com",
    messagingSenderId: "727792278844"
  };
  firebase.initializeApp(config);
  export default firebase;

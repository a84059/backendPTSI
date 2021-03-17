const adminFb = require('firebase-admin');
const firebase = require('firebase');
const serviceAccount = require('../projetoptsi403-firebase-adminsdk-kub20-7cd191f7a6.json');

adminFb.initializeApp({
  credential: adminFb.credential.cert(serviceAccount),
  databaseURL: "https://projetoptsi403-default-rtdb.europe-west1.firebasedatabase.app"
});

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
    apiKey: "AIzaSyAWpLkG28x4NA2HZ2y4qYMFII2MJJ6-NRI",
    authDomain: "projetoptsi403.firebaseapp.com",
    databaseURL: "https://projetoptsi403-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "projetoptsi403",
    storageBucket: "projetoptsi403.appspot.com",
    messagingSenderId: "273742718248",
    appId: "1:273742718248:web:6de3742bdfd588691d1c1d",
    measurementId: "G-3W9R5C4DP6"
  });

  // Initialize Firebase
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
  firebase.auth().useDeviceLanguage();

module.exports = {
    adminFb: adminFb,
    firebase: firebase
}

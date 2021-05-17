import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDDtHjgoIN02AHhFe6qe4Tm3WEYLIOHSyw",
    authDomain: "story-hub-6c379.firebaseapp.com",
    projectId: "story-hub-6c379",
    storageBucket: "story-hub-6c379.appspot.com",
    messagingSenderId: "361890648040",
    appId: "1:361890648040:web:2409d0b12dcf0d33345e5d",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
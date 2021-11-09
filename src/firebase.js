import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDdzS4yCqWuzYHygEL5iCb6XQsnZCSSUno",
  authDomain: "reactcrud-7beba.firebaseapp.com",
  projectId: "reactcrud-7beba",
  storageBucket: "reactcrud-7beba.appspot.com",
  messagingSenderId: "823136253555",
  appId: "1:823136253555:web:bbc2780dcdf935bbd2dc06",
};

// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();

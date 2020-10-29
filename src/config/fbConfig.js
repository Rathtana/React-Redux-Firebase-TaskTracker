import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCvUncN-gwrwMomKI-kKU97nkOhK_9V06E",
    authDomain: "net-ninja-marioplan-7024d.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-7024d.firebaseio.com",
    projectId: "net-ninja-marioplan-7024d",
    storageBucket: "net-ninja-marioplan-7024d.appspot.com",
    messagingSenderId: "181843078490",
    appId: "1:181843078490:web:93f62190519903f5c0d763",
    measurementId: "G-QZE5NBDNV8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;
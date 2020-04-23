import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/functions'

var firebaseConfig = {
  apiKey: "AIzaSyCwFduCvFm33wpGQJ-dvFwjk8rlKFAN_aM",
  authDomain: "ecom-ff2e5.firebaseapp.com",
  databaseURL: "https://ecom-ff2e5.firebaseio.com",
  projectId: "ecom-ff2e5",
  storageBucket: "ecom-ff2e5.appspot.com",
  messagingSenderId: "567355573580",
  appId: "1:567355573580:web:93b1fb941a8761fd257be9",
  measurementId: "G-2B7FNVBQME"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
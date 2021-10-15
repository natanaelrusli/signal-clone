import firebase from 'firebase'
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDgXbhVQ2DOOOf_WAVfS_ggFnGpxudTGEA",
  authDomain: "signal-clone-67635.firebaseapp.com",
  projectId: "signal-clone-67635",
  storageBucket: "signal-clone-67635.appspot.com",
  messagingSenderId: "459115686961",
  appId: "1:459115686961:web:0a57c0ca31ec86fd5db910",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };

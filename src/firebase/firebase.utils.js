import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDJIw7BWOkQL6BzHa9J3ZpHk65WLfyatlQ',
  authDomain: 'crwn-db-a7afd.firebaseapp.com',
  projectId: 'crwn-db-a7afd',
  storageBucket: 'crwn-db-a7afd.appspot.com',
  messagingSenderId: '1039004836200',
  appId: '1:1039004836200:web:f898defde65a4132b036dd',
  measurementId: 'G-DS5WQ34DYB',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

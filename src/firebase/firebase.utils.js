import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyArOJKuMm7y5c-EG88gqnjWgp_bEYamOtI",
    authDomain: "srilakshmi-travels.firebaseapp.com",
    databaseURL: "https://srilakshmi-travels.firebaseio.com",
    projectId: "srilakshmi-travels",
    storageBucket: "srilakshmi-travels.appspot.com",
    messagingSenderId: "892039898858",
    appId: "1:892039898858:web:809eb9c2c4f8f470979993",
    measurementId: "G-3C3P9JHYR5"
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
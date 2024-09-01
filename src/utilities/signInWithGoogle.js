import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const signInWithGoogle = async () => {
  try {
    const userCredential = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());

    if (userCredential) {
      const { email, uid } = userCredential.user;
      console.log('Signed in with Google:', email, uid);
      return uid
    }
  } catch (error) {
    console.log('Error in Sign-In with Google:', error.message);
  }
};

export { signInWithGoogle };

import firebase from "firebase/compat/app";
import "firebase/compat/auth";  // Import the Firebase Auth module'

const signInWithEmail = async ({ email, password }) => {
  console.log(email, password)

  firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
    if (userCredential) {
      const { email, uid } = userCredential.user

      userCredential.user.
        console.log(email, uid)

      return uid
    }
    else {
      console.log('else')
    }
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    // Handling specific errors
    if (errorCode === 'auth/invalid-email') {
      alert('Error: The email address is not valid.');
    } else {
      console.error('Error creating user:', errorCode, errorMessage);
    }
  })

}
export { signInWithEmail }
import firebase from "firebase/compat/app"
import 'firebase/compat/auth'

const createUserWithEmail = async({email,password})=>{
    
    firebase.auth().createUserWithEmailAndPassword(email,password).then((userCredential)=>{
        if(userCredential)
        {
            const user = userCredential.user
            console.log("User : " + user)
        }
    }).catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
    
        // Handling specific errors
        if (errorCode === 'auth/invalid-email') {
          alert('Error: The email address is not valid.');
        } else if (errorCode === 'auth/email-already-in-use') {
          alert('Error: The email address is already in use by another account.');
        } else {
          console.error('Error creating user:', errorCode, errorMessage);
        }
    })
}

export {createUserWithEmail}
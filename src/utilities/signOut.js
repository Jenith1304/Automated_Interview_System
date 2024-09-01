import firebase from "firebase/compat/app"
import 'firebase/compat/auth'

const signOut = async()=>{
    firebase.auth().signOut().then(()=>{
        alert('logedout successfully')
        return true
    }).catch((error)=>{
        console.error('Error while logout : ' + error.message)
    })
}

export {signOut}
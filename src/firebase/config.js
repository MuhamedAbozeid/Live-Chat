import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC5W4GglmICsp3Me04LgSC0FncD7NAcy_E",
    authDomain: "udemy-vue-firebase-sites-69ddf.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-69ddf",
    storageBucket: "udemy-vue-firebase-sites-69ddf.appspot.com",
    messagingSenderId: "585374731738",
    appId: "1:585374731738:web:2e28d4449c720da7f284e3"
  };

  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()

  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectAuth , projectFirestore, timestamp}
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: process.env.VUE_LIVE_CHAT_APP_API_KEY ,
    authDomain: process.env.VUE_LIVE_CHAT_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_LIVE_CHAT_APP_PROJECT_ID,
    storageBucket: process.env.VUE_LIVE_CHAT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_LIVE_CHAT_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_LIVE_CHAT_APP_ID
  };

  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()

  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectAuth , projectFirestore, timestamp}
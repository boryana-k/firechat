import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA5nRS-jdH7LlfS01GlB3dBtH02KYVSxsI",
  authDomain: "firechat-52df2.firebaseapp.com",
  projectId: "firechat-52df2",
  storageBucket: "firechat-52df2.appspot.com",
  messagingSenderId: "356425920287",
  appId: "1:356425920287:web:7461a626d777fc958eca2a",
  measurementId: "G-DW8HCWPYM8"
})

const auth = firebase.auth()
const db = firebase.firestore()


export { auth, db }
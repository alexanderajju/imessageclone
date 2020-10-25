
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBbMgtit4UQuQI9Aw-_yn27uWhNPUH-vAo",
    authDomain: "imessage-f6598.firebaseapp.com",
    databaseURL: "https://imessage-f6598.firebaseio.com",
    projectId: "imessage-f6598",
    storageBucket: "imessage-f6598.appspot.com",
    messagingSenderId: "583665722075",
    appId: "1:583665722075:web:0cdd242af329a9d727e2fe"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
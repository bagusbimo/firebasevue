// Initialize Firebase
import Firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD89XXijweDX3aoYhudvL3AAG8m4slX4Lc",
    authDomain: "vue-firebase-351a5.firebaseapp.com",
    databaseURL: "https://vue-firebase-351a5.firebaseio.com",
    projectId: "vue-firebase-351a5",
    storageBucket: "vue-firebase-351a5.appspot.com",
    messagingSenderId: "229401399919"
  };
  
  let app = Firebase.initializeApp(config);
  let db = app.database();
  let daganganRef = db.ref('dagangan');
  
  export default daganganRef;
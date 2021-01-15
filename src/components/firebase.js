import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAo0auLKQdTatfirXRo1JbIlWAZ_-k0sk0",
  authDomain: "let-s-go-e7c0f.firebaseapp.com",
  databaseURL: "https://let-s-go-e7c0f.firebaseio.com",
  projectId: "let-s-go-e7c0f",
  storageBucket: "let-s-go-e7c0f.appspot.com",
  messagingSenderId: "896248935177",
  appId: "1:896248935177:web:0a9753ead67b96179959d8",
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.database = app.database();
  }
  newUserEmailAndPassword = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };
  signInEmailAndPassword = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  };
  signOut = () => this.auth.signOut();
}
export default Firebase;

import React, { useState } from "react";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

export default function Logowanie() {
  const [auth, setAuth] = useState({});
  const [error, setError] = useState("");
  let history = useHistory();

  const handleAuth = (event) => {
    setAuth({
      ...auth,
      [event.target.name]: event.target.value,
    });
  };
  const handleLogin = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(auth.email, auth.password)
      .catch((err) => {
        setError(err.message);
      });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        history.push("/");
      }
    });
  };

  return (
    <div className='login'>
      <div>
        <form className='loginContainer'>
          <h1>Log In !</h1>
          <label htmlFor='email'>Email</label>
          <input onChange={handleAuth} name='email' type='text' />
          <label htmlFor='password'>Password</label>
          <input onChange={handleAuth} name='password' type='password' />
          <button className={"authBtn"} onClick={handleLogin}>
            Log In
          </button>
          <div>{error}</div>
        </form>
      </div>
    </div>
  );
}

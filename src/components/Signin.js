import React, { useState } from "react";
import firebase from "firebase";

import { useHistory } from "react-router-dom";

export default function Rejestracja() {
  const [auth, setAuth] = useState({});
  const [error, setError] = useState("");
  let history = useHistory();

  const handleAuth = (event) => {
    setAuth({
      ...auth,
      [event.target.name]: event.target.value,
    });
  };
  const handleSignin = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(auth.email, auth.password)
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
    <div className='signin'>
      <h1>Create an Account !</h1>

      <div>
        <form>
          <label htmlFor='email'>Email</label>
          <input onChange={handleAuth} name='email' type='text' />
          <label htmlFor='password'>Password</label>
          <input onChange={handleAuth} name='password' type='password' />
          <label htmlFor='repeatpassword'>Repeat Password</label>
          <input onChange={handleAuth} name='repeatpassword' type='password' />
        </form>
      </div>
      {auth.password === auth.repeatpassword &&
      auth.password !== undefined &&
      auth.password !== "" ? (
        <button className='authBtn' onClick={handleSignin}>
          Create an Account
        </button>
      ) : (
        <button className='authBtn' disabled='true'>
          Passwords do not match
        </button>
      )}
      <div>{error}</div>
    </div>
  );
}

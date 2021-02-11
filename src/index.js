import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Firebase from "./components/firebase";
import FirebaseContext from "./components/firebaseContext";

//redux
import Store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Provider store={Store}>
      <App />
    </Provider>
  </FirebaseContext.Provider>,

  document.getElementById("root")
);

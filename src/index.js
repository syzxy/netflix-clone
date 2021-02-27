import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "./global-styles";
import { db } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase-context";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ db }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

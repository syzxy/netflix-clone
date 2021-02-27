import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase-context";

const useAuthListener = () => {
  // Store the user info in localStorage to keep the login state persistently
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

  const { db } = useContext(FirebaseContext);
  useEffect(() => {
    // firebase.onAuthStateChanged returns a firebase.Unsubscribe object
    const unsubscribe = db.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    // clean the listener just before the component will unmount
    return () => unsubscribe();
  }, []);

  return { user };
};

export default useAuthListener;

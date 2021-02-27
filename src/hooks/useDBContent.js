import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase-context";

export default function useDBContent(collectionID) {
  const { db } = useContext(FirebaseContext);
  const [docs, setDocs] = useState([]);

  // fetch movies from localStorage or, if not present, firebase when the app loads
  useEffect(() => {
    const localData = localStorage.getItem(collectionID);
    if (localData) {
      setDocs(JSON.parse(localData));
    } else {
      console.log("fetching data from firebase!");
      db.firestore()
        .collection(collectionID)
        .get()
        .then((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            docId: doc.id,
            ...doc.data(),
          }));
          setDocs(data);
          localStorage.setItem(collectionID, JSON.stringify(data));
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return { [collectionID]: docs };
}

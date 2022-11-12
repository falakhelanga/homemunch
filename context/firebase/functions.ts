import { getFirestore, collection, doc, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { Entry } from "../../types/entryTypes";

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const functions = {
  addEntry: (values: Entry) => {
    return addDoc(collection(db, "entries"), values);
  },
};

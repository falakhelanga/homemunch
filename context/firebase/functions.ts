import { getFirestore, collection, doc, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { Entry } from "../../types/entryTypes";
import { Chef } from "../../types/auth";

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();
export const functions = {
  addEntry: (values: Entry) => {
    return addDoc(collection(db, "entries"), values);
  },
  chefsSignUp: async (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return Promise.resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return Promise.reject(error);
      });
  },
};

import {
  getFirestore,
  collection,
  doc,
  addDoc,
  serverTimestamp,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { Entry } from "../../types/entryTypes";
import { Chef } from "../../types/auth";
import Cookies from "js-cookie";

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();
export const functions = {
  db,

  addEntry: (values: Entry) => {
    return addDoc(collection(db, "entries"), values);
  },
  addUserInfo: (values: any, userId: any) => {
    return updateDoc(doc(db, "users", userId), {
      ...values,
      dateUpdated: Timestamp.now(),
    });
  },
  chefsSignUp: async (chef: Chef, password: string) => {
    return createUserWithEmailAndPassword(auth, chef.email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.uid, "uid");
        console.log(user.emailVerified);
        setDoc(doc(db, "users", user.uid), {
          ...chef,
          dateCreated: Timestamp.now(),
        });
        console.log(user, "user");
        // Cookies.set(JSON.stringify({...user,}))
        sendEmailVerification(user);
        return Promise.resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return Promise.reject(error);
      });
  },
  chefsSignIn: async (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.uid, "uid");
        console.log(user.emailVerified);

        console.log(user, "user");
        // Cookies.set(JSON.stringify({...user,}))

        return Promise.resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return Promise.reject(error);
      });
  },
};

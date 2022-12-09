import {
  getFirestore,
  collection,
  doc,
  addDoc,
  serverTimestamp,
  setDoc,
  Timestamp,
  updateDoc,
  getDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { Entry } from "../../types/entryTypes";
import { Chef } from "../../types/auth";
import Cookies from "js-cookie";

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();
const facebookProvider = new FacebookAuthProvider();

const user = auth.currentUser;
export const functions = {
  db,

  addEntry: (values: Entry) => {
    return addDoc(collection(db, "entries"), values);
  },

  ///////////// AUTH
  addUserInfo: (values: any, userId: any) => {
    return updateDoc(doc(db, "chefs", userId), {
      ...values,
      dateUpdated: Timestamp.now(),
    });
  },
  getUser: (userId: string) => {
    const userRef = doc(db, "chefs", userId);
    return getDoc(userRef);
  },
  chefsSignUp: async (chef: Chef, password: string) => {
    return createUserWithEmailAndPassword(auth, chef.email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.uid, "uid");
        console.log(user.emailVerified);
        setDoc(doc(db, "chefs", user.uid), {
          ...chef,
          isOnboarded: false,
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

        // Cookies.set(JSON.stringify({...user,}))

        return Promise.resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return Promise.reject(error);
      });
  },

  ///////////// social signin
  signInWithFaceBook: async () => {
    return signInWithPopup(auth, facebookProvider)
      .then(async (result) => {
        const user = result.user;
        const userRef = doc(db, "chefs", user.uid);

        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
          setDoc(doc(db, "chefs", user.uid), {
            email: user.email ? user.email : "",
            phoneNumber: user.phoneNumber ? user.phoneNumber : "",
            emailVerified: true,
            isSocialSignIn: true,
            isOnboarded: false,
            dateCreated: Timestamp.now(),
          });
        }

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.

        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken;
        console.log(user, "user");
        return Promise.resolve(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log(error, "error");
        return Promise.reject(error);
      });
  },

  //////////// dishes
  createDish: (values: any) => {
    return addDoc(collection(db, "dishes"), {
      ...values,
      dateCreated: Timestamp.now(),
      dateUpdated: Timestamp.now(),
    });
  },

  getDishes: (chefLink: string) => {
    const dishesRef = collection(db, "dishes");
    const q = query(dishesRef, where("chefLink", "==", chefLink));
    return getDocs(q);
  },
};

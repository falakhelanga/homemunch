import { User } from "firebase/auth";
import {
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  Firestore,
  Query,
  QuerySnapshot,
} from "firebase/firestore";
import { Chef } from "./auth";
import { Entry } from "./entryTypes";

export interface FireBaseTypes {
  addEntry: (values: Entry) => Promise<DocumentReference<DocumentData>>;
  chefsSignUp: (chef: Chef, password: string) => Promise<User>;
  addUserInfo: (values: any, userId: any) => Promise<void>;
  chefsSignIn: (email: string, password: string) => Promise<User>;
  db: Firestore;
  getUser: (userId: string) => Promise<DocumentSnapshot<DocumentData>>;
  createDish: (values: any) => Promise<DocumentReference<any>>;
  getDishes: (chefLink: string) => Promise<QuerySnapshot<DocumentData>>;
}

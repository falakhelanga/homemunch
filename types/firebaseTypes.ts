import { User } from "firebase/auth";
import { DocumentData, DocumentReference, Firestore } from "firebase/firestore";
import { Chef } from "./auth";
import { Entry } from "./entryTypes";

export interface FireBaseTypes {
  addEntry: (values: Entry) => Promise<DocumentReference<DocumentData>>;
  chefsSignUp: (chef: Chef, password: string) => Promise<User>;
  addUserInfo: (values: any, userId: any) => Promise<void>;
  chefsSignIn: (email: string, password: string) => Promise<User>;
  db: Firestore;
}

import { User } from "firebase/auth";
import { DocumentData, DocumentReference } from "firebase/firestore";
import { Chef } from "./auth";
import { Entry } from "./entryTypes";

export interface FireBaseTypes {
  addEntry: (values: Entry) => Promise<DocumentReference<DocumentData>>;
  chefsSignUp: (email: string, password: string) => Promise<User>;
}

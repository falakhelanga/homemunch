import { DocumentData, DocumentReference } from "firebase/firestore";
import { Entry } from "./entryTypes";

export interface FireBaseTypes {
  addEntry: (values: Entry) => Promise<DocumentReference<DocumentData>>;
}

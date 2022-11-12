import { Context, createContext, ReactNode, useContext } from "react";
import { FireBaseTypes } from "../../types/firebaseTypes";

import { functions } from "./functions";
const FireBaseContext: Context<FireBaseTypes | null> =
  createContext<FireBaseTypes | null>(null);

const FireBaseProvider = ({ children }: { children: ReactNode }) => {
  return (
    <FireBaseContext.Provider value={functions}>
      {children}
    </FireBaseContext.Provider>
  );
};

export default FireBaseProvider;
export const useFireBase = () => useContext(FireBaseContext);

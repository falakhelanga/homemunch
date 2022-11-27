import { async } from "@firebase/util";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { Chef } from "../../../types/auth";

interface ChefContextType {
  chefAuth: (User & Chef) | null;
  setChefAuth: Dispatch<SetStateAction<(User & Chef) | null>>;
  setRedirect: Dispatch<SetStateAction<string | null>>;
  redirect: string | null;
  initializing: boolean;
  setInitializing: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<ChefContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [redirect, setRedirect] = useState<string | null>(null);
  const [chefAuth, setChefAuth] = useState<(User & Chef) | null>(null);
  const [initializing, setInitializing] = useState(true);
  const auth = getAuth();
  // useEffect(() => {
  //   setInitializing(true);
  //   (async () => {

  //   })();
  // }, [auth]);
  onAuthStateChanged(auth, (user) => {
    setInitializing(false);
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User

      const uid = user.uid;
      const cookieUserDetails = Cookies.get("chef")
        ? JSON.parse(Cookies.get("chef")!!)
        : null;

      if (cookieUserDetails) {
        setChefAuth({ ...user, ...cookieUserDetails });
      }

      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  return (
    <AuthContext.Provider
      value={{
        chefAuth,
        setChefAuth,
        setRedirect,
        redirect,
        initializing,
        setInitializing,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useChefAuth = () => useContext(AuthContext) as ChefContextType;

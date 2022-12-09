import { async } from "@firebase/util";
import { getAuth, onAuthStateChanged, User, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
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
import { useFireBase } from "../../firebase";

interface ChefContextType {
  chefAuth: (User & Chef) | null;
  setChefAuth: Dispatch<SetStateAction<(User & Chef) | null>>;
  setRedirect: Dispatch<SetStateAction<string | null>>;
  redirect: string | null;
  initializing: boolean;
  setInitializing: Dispatch<SetStateAction<boolean>>;
  logOut: () => void;
  setFaceBookUser: Dispatch<SetStateAction<User | null>>;
}

const AuthContext = createContext<ChefContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [redirect, setRedirect] = useState<string | null>(null);
  const [chefAuth, setChefAuth] = useState<(User & Chef) | null>(null);
  const [initializing, setInitializing] = useState(true);
  const [facebookUser, setFaceBookUser] = useState<User | null>(null);
  const { getUser } = useFireBase();
  const auth = getAuth();

  const logOut = () => {
    signOut(auth);
    // router.push("/auth/chef/signin");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setInitializing(false);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log(user, "facebook");
        const uid = user.uid;

        const userSnap = await getUser(uid);

        if (userSnap.exists()) {
          setChefAuth({ ...user, ...userSnap.data() });
          if (
            !user.emailVerified &&
            user.providerData[0].providerId === "password"
          ) {
            return router.push("/auth/chef/verify");
          }
          if (!userSnap.data().isOnboarded) {
            return router.push("/chefs/onboarding");
          }
          router.push("/chefs/admin/meals");
        } else {
          console.log("No such document!");
        }

        // ...
      } else {
        setChefAuth(null);
        if (router.route.includes("admin")) {
          return router.push("/auth/chef/signin");
        }

        // User is signed out
        // ...
      }
    });
    return unsubscribe;
  }, [auth]);

  // useEffect(() => {
  //   (async () => {
  //     if (facebookUser) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/firebase.User

  //       const uid = facebookUser.uid;

  //       const userSnap = await getUser(uid);

  //       if (userSnap.exists()) {
  //         setChefAuth({ ...(userSnap.data() as any) });
  //         // if (!user.emailVerified) {
  //         //   return router.push("/auth/chef/verify");
  //         // }
  //         if (!userSnap.data().isOnboarded) {
  //           return router.push("/chefs/onboarding");
  //         }
  //         router.push("/chefs/admin/meals");
  //       } else {
  //         console.log("No such document!");
  //       }

  //       // ...
  //     } else {
  //       setChefAuth(null);
  //       if (router.route.includes("admin")) {
  //         return router.push("/auth/chef/signin");
  //       }

  //       // User is signed out
  //       // ...
  //     }
  //   })();
  // }, [facebookUser, getUser]);

  useEffect(() => {
    if (router.route.includes("admin") && !chefAuth) {
      router.replace("/auth/chef/signin");
    }
    // if (!chefAuth?.emailVerified) {
    //   if (router.route !== "/auth/chef/signup") {
    //     router.push("/auth/chef/verify");
    //   }
    // }
  }, [chefAuth, router]);
  return (
    <AuthContext.Provider
      value={{
        setFaceBookUser,
        chefAuth,
        setChefAuth,
        setRedirect,
        redirect,
        initializing,
        setInitializing,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useChefAuth = () => useContext(AuthContext) as ChefContextType;

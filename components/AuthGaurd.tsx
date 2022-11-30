// import { useAuth } from "components/AuthProvider"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useChefAuth } from "../context/chefs/auth";

export function AuthGuard({ children }: { children: JSX.Element }) {
  const { chefAuth, initializing, setRedirect } = useChefAuth();

  const router = useRouter();

  useEffect(() => {
    if (!initializing) {
      //auth is initialized and there is no user

      if (!chefAuth) {
        // remember the page that user tried to access
        setRedirect(router.route);
        // redirect
        router.push("/auth/chef/signin");
      }
    }
  }, [initializing, chefAuth, setRedirect]);
  // useEffect(() => {
  //   console.log(chefAuth?.isOnboarded, "hsh");
  //   if (router.route !== "/chefs/onboarding") {
  //     if (!chefAuth?.isOnboarded) {
  //       router.push("/chefs/onboarding");
  //     } else {
  //       router.push("/chefs");
  //     }
  //   }
  // }, []);
  /* show loading indicator while the auth provider is still initializing */

  if (initializing) {
    return <h1>Application Loading</h1>;
  }
  if (chefAuth && !chefAuth?.emailVerified) {
    return <h1>Please verify your email</h1>;
  }

  // if auth initialized with a valid user show protected page
  if (!initializing && chefAuth && chefAuth?.emailVerified) {
    return <>{children}</>;
  }

  /* otherwise don't return anything, will do a redirect from useEffect */
  return null;
}

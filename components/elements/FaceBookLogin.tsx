import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { useChefAuth } from "../../context/chefs/auth";
import { useFireBase } from "../../context/firebase";
import Button from "./Button";

const FaceBookLogin = ({ isSignUp = false }: { isSignUp: boolean }) => {
  const { signInWithFaceBook } = useFireBase();
  const { setFaceBookUser } = useChefAuth();
  const handleSignIn = async () => {
    signInWithFaceBook()
      .then((result) => {
        // The signed-in user info.

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // const credential = FacebookAuthProvider.credentialFromResult(result);
        // const accessToken = credential?.accessToken;
        console.log(result, "user");
        setFaceBookUser(result);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = FacebookAuthProvider.credentialFromError(error);
        console.log(error, "error");
        // ...
      });
  };
  return (
    <Button
      onClick={handleSignIn}
      className="bg-[#3771c7] w-full py-2 relative text-center font-normal"
    >
      <div className="absolute left-3 flex items-center h-full top-0">
        <FaFacebookSquare size={23} color="white" />
      </div>

      <span className="text-white">
        {isSignUp ? "Continue with facebook" : "Login with Facebook"}
      </span>
    </Button>
  );
};

export default FaceBookLogin;

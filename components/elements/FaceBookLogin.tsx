import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import Button from "./Button";

const FaceBookLogin = ({ isSignUp = false }: { isSignUp: boolean }) => {
  return (
    <Button className="bg-[#3771c7] w-full py-2 relative text-center font-normal">
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

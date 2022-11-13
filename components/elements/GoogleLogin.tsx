import React from "react";
import { FcGoogle } from "react-icons/fc";
import Button from "./Button";
const GoogleLogin = ({ isSignUp }: { isSignUp: boolean }) => {
  return (
    <Button className="bg-[#4484f3] w-full py-2 relative text-center font-normal ">
      <div className="absolute left-3 flex items-center h-full top-0">
        <FcGoogle size={23} color="white" />
      </div>

      <span className="text-white">
        {isSignUp ? "Continue with Google" : "Login with Google"}
      </span>
    </Button>
  );
};

export default GoogleLogin;

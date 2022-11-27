import React from "react";
import ChefSignInForm from "./chefSignInForm";

const SignIn = () => {
  return (
    <div className="h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="bg-[url(/images/chef-signup.jpg)] bg-no-repeat bg-cover  bg-bottom col-span-1 h-full"></div>
        <div className="md:flex hidden flex items-center justify-center">
          <ChefSignInForm />
        </div>
      </div>
    </div>
  );
};

export default SignIn;

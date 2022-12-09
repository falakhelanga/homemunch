import React from "react";

const verify = () => {
  return (
    <div className="w-full h-screen bg-white flex justify-center items-center">
      <div className=" flex flex-col items-center">
        <div className=" w-[20rem] aspect-square ">
          <img
            className="w-full h-full"
            src="/images/envelope.jpeg"
            alt="envelope"
          />
        </div>
        <h1 className="text-2xl mb-4">Verify your Email</h1>
        <div className="flex justify-center flex-col items-center text-gray-400">
          <p>Your account has been successfully registered. To Complete the </p>
          <p>process please check your email for a validation request</p>
        </div>
      </div>
    </div>
  );
};

export default verify;

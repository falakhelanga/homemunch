import React from "react";
import DisplayInfo from "./DisplayInfo";

const UserInfoNav = () => {
  return (
    <div className="bg-white  px-8 flex justify-end fixed top-0 right-0 left-0 z-[5]">
      <DisplayInfo />
    </div>
  );
};

export default UserInfoNav;

import React from "react";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { useChefAuth } from "../../../../context/chefs/auth";

const DisplayInfo = () => {
  const { chefAuth } = useChefAuth();
  return (
    <div className="border-t border-white  w-full px-8 py-6 flex items-center ">
      <div className="items-center w-full  flex">
        <div>
          <FaUserCircle size={30} color="white" />
        </div>
        <div className="ml-4 ">
          <div className="text-white">{`${chefAuth?.firstName} ${chefAuth?.lastName}`}</div>
        </div>
      </div>
      <AiFillLock size={30} color="white" />
    </div>
  );
};

export default DisplayInfo;

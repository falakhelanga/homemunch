import React from "react";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { useChefAuth } from "../../../../context/chefs/auth";

const DisplayInfo = () => {
  const { logOut } = useChefAuth();
  const { chefAuth } = useChefAuth();
  console.log(chefAuth, "chefAuth");
  return (
    <div className="border-t border-white   px-8 py-6 flex items-center ">
      <div className="items-center w-full  flex">
        <div>
          <>
            {chefAuth?.profileImage ? (
              <div className="aspect-square w-[2.5rem] rounded-full overflow-hidden">
                <img className="h-full w-full" src={chefAuth.profileImage} />
              </div>
            ) : (
              <FaUserCircle size={30} color="black" />
            )}
          </>
        </div>
        <div className="ml-4 ">
          <div className="text-black">{`${chefAuth?.firstName} ${chefAuth?.lastName}`}</div>
        </div>
      </div>

      <AiFillLock
        className="cursor-pointer ml-16"
        onClick={logOut}
        size={30}
        color="black"
      />
    </div>
  );
};

export default DisplayInfo;

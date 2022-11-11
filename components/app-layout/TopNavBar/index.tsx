import Image from "next/image";
import React from "react";
import Body from "../../elements/Body";

const TopNavBar = () => {
  return (
    <div className="h-[12vh]  w-screen  py-4 fixed ">
      <Body>
        <div className="md:h-[6rem] md:w-[6rem] w-[4rem] h-[4rem] ">
          <img src="/logo.jpeg" alt="logo" className="rounded-full " />
        </div>
      </Body>
    </div>
  );
};

export default TopNavBar;

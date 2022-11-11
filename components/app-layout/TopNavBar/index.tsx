import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import Body from "../../elements/Body";

const TopNavBar = () => {
  return (
    <div className="h-[12vh]  w-screen  py-4 fixed z-10 ">
      <Body className="flex justify-between items-center">
        <div className="md:h-[6rem] md:w-[6rem] w-[4rem] h-[4rem] ">
          <img src="/logo.jpeg" alt="logo" className="rounded-full " />
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className="text-white md:cursor-pointer"
          size="lg"
        />
      </Body>
    </div>
  );
};

export default TopNavBar;

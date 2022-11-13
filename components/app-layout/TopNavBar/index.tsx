import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import Body from "../../elements/Body";
import { GiCook } from "react-icons/gi";
import Link from "next/link";
const TopNavBar = () => {
  return (
    <div className="h-[12vh]  w-screen  py-4 absolute z-10  right-0  ">
      <Body className="flex justify-between items-center">
        <Link href="/" className="md:h-[6rem] md:w-[6rem] w-[4rem] h-[4rem] ">
          <img src="/logo.jpeg" alt="logo" className="rounded-full " />
        </Link>
        <div className="flex gap-3 items-center ">
          <Link
            href="/auth/chef/signup"
            className="font-bold border py-2 border-hmYellow rounded-md px-2 md:hover:bg-hmYellow md:hover:text-black flex items-center mr-6 "
          >
            <span>Cook with us</span> <GiCook size={23} />
          </Link>

          <FontAwesomeIcon
            icon={faBars}
            className="text-black md:cursor-pointer"
            size="xl"
          />
        </div>
      </Body>
    </div>
  );
};

export default TopNavBar;

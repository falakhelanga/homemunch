import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import DisplayInfo from "./DisplayInfo";
import MenuItem, { MenuItemPropType } from "./MenuItem";

const items: MenuItemPropType[] = [
  // {
  //   text: "Dashboard",
  //   bg: "bg-hmYellow",
  //   link: "/chefs/dashboard",
  // },
  {
    text: "Meals",
    link: "/chefs/meals",
  },
  {
    text: "Orders",
    link: "/chefs/orders",
  },
  {
    text: "Profile",
    link: "/chefs/profile",
  },
];

const SideMenu = () => {
  const router = useRouter();

  return (
    <div className="bg-hmRed w-full h-full flex flex-col">
      <div className="flex-1 ">
        <div className="w-full flex justify-center items-center">
          <div className="md:h-[10rem] md:w-[10rem] w-[4rem] h-[4rem] ">
            <img src="/logo.jpeg" alt="logo" className="rounded-full " />
          </div>
        </div>

        {items.map((item, idx) => (
          <Link key={idx} href={item.link!!}>
            <MenuItem
              text={item.text}
              bg={item.link === router.route ? "bg-hmYellow" : ""}
            />
          </Link>
        ))}
      </div>
      <DisplayInfo />
    </div>
  );
};

export default SideMenu;

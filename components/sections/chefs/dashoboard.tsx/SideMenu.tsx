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
    link: "/chefs/admin/meals",
  },
  {
    text: "Orders",
    link: "/chefs/admin/orders",
  },
  {
    text: "Profile",
    link: "/chefs/admin/profile",
  },
];

const SideMenu = () => {
  const router = useRouter();

  return (
    <div className="bg-hmRed w-full h-full flex flex-col">
      <div className="flex-1 ">
        <div className="w-full flex justify-center items-center border-b border-white">
          <div className="md:h-[10rem] md:w-[10rem] w-[4rem] h-[4rem] ">
            <img src="/logo.jpeg" alt="logo" className="rounded-full " />
          </div>
        </div>

        {items.map((item, idx) => (
          <Link key={idx} href={item.link!!}>
            <MenuItem
              text={item.text}
              bg={router.route.includes(item.link) ? "bg-hmYellow" : ""}
            />
          </Link>
        ))}
      </div>
      <DisplayInfo />
    </div>
  );
};

export default SideMenu;

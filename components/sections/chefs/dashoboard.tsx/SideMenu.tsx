import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { GiHotMeal } from "react-icons/gi";
import { GoListUnordered } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import DisplayInfo from "./DisplayInfo";
import MenuItem, { MenuItemPropType } from "./MenuItem";

const items: MenuItemPropType[] = [
  // {
  //   text: "Dashboard",
  //   bg: "bg-hmYellow",
  //   link: "/chefs/dashboard",
  // },
  {
    Icon: () => <GiHotMeal size={25} />,
    text: "Meals",
    link: "/chefs/admin/meals",
  },
  {
    Icon: () => <GoListUnordered size={25} />,
    text: "Orders",
    link: "/chefs/admin/orders",
  },
  {
    Icon: () => <CgProfile size={25} />,
    text: "Profile",
    link: "/chefs/admin/profile",
  },
];

const SideMenu = () => {
  const router = useRouter();

  return (
    <div className="bg-hmRed w-full h-full flex flex-col relative z-[7]">
      <div className="flex-1 ">
        <div className="w-full flex justify-center items-center border-b border-white">
          <div className="md:h-[10rem] md:w-[10rem] w-[4rem] h-[4rem] ">
            <img src="/logo.jpeg" alt="logo" className="rounded-full " />
          </div>
        </div>

        {items.map((item, idx) => (
          <Link key={idx} href={item.link!!}>
            <MenuItem
              Icon={item.Icon}
              text={item.text}
              bg={router.route.includes(item?.link) ? "bg-hmYellow" : ""}
            />
          </Link>
        ))}
      </div>
      {/* <DisplayInfo /> */}
    </div>
  );
};

export default SideMenu;

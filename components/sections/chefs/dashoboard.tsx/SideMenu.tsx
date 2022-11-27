import React from "react";
import DisplayInfo from "./DisplayInfo";
import MenuItem, { MenuItemPropType } from "./MenuItem";

const items: MenuItemPropType[] = [
  {
    text: "Dashboard",
    bg: "bg-hmYellow",
  },
  {
    text: "Meals",
  },
  {
    text: "Order",
  },
  {
    text: "Profile",
  },
];

const SideMenu = () => {
  return (
    <div className="bg-hmRed w-full h-full flex flex-col">
      <div className="flex-1 ">
        <div className="w-full flex justify-center items-center">
          <div className="md:h-[10rem] md:w-[10rem] w-[4rem] h-[4rem] ">
            <img src="/logo.jpeg" alt="logo" className="rounded-full " />
          </div>
        </div>

        {items.map((item, idx) => (
          <MenuItem text={item.text} key={idx} bg={item.bg} />
        ))}
      </div>
      <DisplayInfo />
    </div>
  );
};

export default SideMenu;

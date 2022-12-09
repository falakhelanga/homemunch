import React from "react";

export interface MenuItemPropType {
  text: string;
  bg?: string;
  link?: string;
  Icon: () => JSX.Element;
}

const MenuItem = ({ text, bg, Icon }: MenuItemPropType) => {
  return (
    <div
      className={`border-b cursor-pointer hover:bg-hmYellow border-white flex gap-4  pl-8 items-center py-4 text-black font-semibold ${bg}`}
    >
      <Icon /> <span className="text-xl">{text}</span>
    </div>
  );
};

export default MenuItem;

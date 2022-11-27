import React from "react";

export interface MenuItemPropType {
  text: string;
  bg?: string;
}

const MenuItem = ({ text, bg }: MenuItemPropType) => {
  return (
    <div
      className={`border-b cursor-pointer hover:bg-hmYellow border-white flex  pl-8 items-center py-4 text-white font-bold ${bg}`}
    >
      {text}
    </div>
  );
};

export default MenuItem;

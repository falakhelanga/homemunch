import React, { useRef } from "react";
import { useNavDrawer } from "../../../context/navDrawer";
import Body from "../../elements/Body";
import useClickOutSide from "../../../hooks/useClickOutSide";
const MenuDrawer = () => {
  const { showNavDrawer, closeNavDrawer } = useNavDrawer();
  const navRef = useRef(null);
  useClickOutSide(navRef, closeNavDrawer);
  return (
    <div
      ref={navRef}
      style={{
        transform: showNavDrawer ? "translateY(0%)" : "translateY(-100%)",
      }}
      //   style={{ transform: "translateY(0%)" }}
      className="w-full text-lg h-[20vh] fixed z-[20] top-0 right-0 left-0 bg-white flex items-center "
    >
      <Body className="flex justify-between">
        <div className="flex gap-8">
          <span className="cursor-pointer">HOME</span>
          <span className="cursor-pointer">ABOUT US</span>
          <span className="cursor-pointer">HOW IT WORKS</span>
        </div>
        <div>
          <span className="cursor-pointer">COOK WITH US</span>
        </div>
      </Body>
    </div>
  );
};

export default MenuDrawer;

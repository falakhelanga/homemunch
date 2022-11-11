import React from "react";
import Body from "./Body";

const Strip = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-hmRed md:h-[20vh] h-[10vh] flex items-center">
      <Body>{children}</Body>
    </div>
  );
};

export default Strip;

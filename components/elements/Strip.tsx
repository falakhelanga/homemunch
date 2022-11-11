import React from "react";
import Body from "./Body";

const Strip = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-hmYellow md:h-[15vh] h-[10vh] flex items-center">
      <Body>{children}</Body>
    </div>
  );
};

export default Strip;

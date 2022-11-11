import React from "react";
import TopNavBar from "./TopNavBar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <TopNavBar />
      <main className="">{children}</main>
    </div>
  );
};

export default AppLayout;

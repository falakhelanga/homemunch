import React from "react";
import Footer from "./Footer";
import TopNavBar from "./TopNavBar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-full">
      <TopNavBar />
      <main className=" ">
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
};

export default AppLayout;

import { useRouter } from "next/router";
import React from "react";
import Footer from "./Footer";
import TopNavBar from "./TopNavBar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <div className="relative h-full">
      {" "}
      {!router.route.includes("auth") && <TopNavBar />}
      <main className=" ">
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
};

export default AppLayout;

import { useRouter } from "next/router";
import React from "react";
import { useChefAuth } from "../../context/chefs/auth";
import SideMenu from "../sections/chefs/dashoboard.tsx/SideMenu";
import UserInfoNav from "../sections/chefs/dashoboard.tsx/UserInfoNav";
import Footer from "./Footer";
import TopNavBar from "./TopNavBar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { chefAuth } = useChefAuth();
  return (
    <div className="relative h-full">
      {router.route.includes("admin") && (
        <div className="h-screen w-full flex items-center ">
          <div className=" flex-[0.25] h-full">
            <SideMenu />
          </div>
          <div className=" overflow-auto flex-[1] h-full">
            <UserInfoNav />
            <div className="mt-[6rem] mb-[2rem]">{children}</div>
          </div>
        </div>
      )}
      {!router.route.includes("admin") && (
        <>
          {!router.route.includes("chef") && <TopNavBar />}
          <main className=" ">
            <div>{children}</div>
            {!router.route.includes("chef") && <Footer />}
          </main>
        </>
      )}
    </div>
  );
};

export default AppLayout;

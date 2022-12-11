import React from "react";
import AuthProvider from "./chefs/auth";
import FireBaseProvider from "./firebase";
import MapContextProvider from "./googleMap/index";
import NavDrawerProvider from "./navDrawer";
const DataProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <FireBaseProvider>
        <AuthProvider>
          <NavDrawerProvider>{children}</NavDrawerProvider>
        </AuthProvider>
      </FireBaseProvider>
    </>
  );
};

export default DataProvider;

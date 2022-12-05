import React from "react";
import AuthProvider from "./chefs/auth";
import FireBaseProvider from "./firebase";

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <FireBaseProvider>
        <AuthProvider>{children}</AuthProvider>
      </FireBaseProvider>
    </>
  );
};

export default DataProvider;

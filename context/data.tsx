import React from "react";
import FireBaseProvider from "./firebase";

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <FireBaseProvider>{children}</FireBaseProvider>
    </>
  );
};

export default DataProvider;

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  return;
  <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
export const useAuth = () => useContext(AuthContext);

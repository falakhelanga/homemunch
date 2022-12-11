import {
  useContext,
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export interface NavDrawerContextType {
  openNavDrawer: () => void;
  closeNavDrawer: () => void;
  showNavDrawer: boolean;
  setShowNavDrawer: Dispatch<SetStateAction<boolean>>;
}
const NavDrawerContext = createContext<NavDrawerContextType | null>(null);

const NavDrawerProvider = ({ children }: { children: ReactNode }) => {
  const [showNavDrawer, setShowNavDrawer] = useState(false);

  const openNavDrawer = () => {
    setShowNavDrawer(true);
  };
  const closeNavDrawer = () => {
    setShowNavDrawer(false);
  };
  return (
    <NavDrawerContext.Provider
      value={{ openNavDrawer, closeNavDrawer, showNavDrawer, setShowNavDrawer }}
    >
      {children}
    </NavDrawerContext.Provider>
  );
};

export default NavDrawerProvider;
export const useNavDrawer = () =>
  useContext(NavDrawerContext) as NavDrawerContextType;

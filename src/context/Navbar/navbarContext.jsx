import { Children, createContext } from "react";

let NavbarContext = createContext();

export function NavbarProvider({ children }) {
  return <NavbarContext.Provider>{children}</NavbarContext.Provider>;
}
export default NavbarContext;

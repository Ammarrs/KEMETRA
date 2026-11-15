import { createContext, useContext } from "react";
import React from "react";

let ProfileContext = createContext();

export function ProfileProvider({ children }) {
  return <ProfileContext.Provider value={{}}>{children}</ProfileContext.Provider>;
}

export default ProfileContext;

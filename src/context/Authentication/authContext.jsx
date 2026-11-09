import React, { createContext } from "react";

let AuthContext = createContext();

export function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={{  }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;

export const useAuth = () => useContext(AuthContext);

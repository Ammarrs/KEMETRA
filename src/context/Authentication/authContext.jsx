import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from './../../pages/Login';
let AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [userError, setUserError] = useState("");
  const [token, setToken] = useState(localStorage.token ? localStorage.token : '');
  const [connect, setConnect] = useState(false);
  const navigate = useNavigate();
  const gologin = () => navigate("/login");


  const login = (userData, rememberMe) => {
    setUser(userData);
    if (rememberMe) {
      localStorage.token = token;
    }
    // coll back
  };
  const logout = () => {
    localStorage.token = "";
    setToken("");
    setUser(null);
    setConnect(false);
    gologin();
  }
  const getUserAfterLogin = () => {
    if (token) {
      // coll back
    }
  }
  useEffect(() => {
    getUserAfterLogin();
  }, [])
  return (
    <AuthContext.Provider value={{ login, user, token, connect, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;

export const useAuth = () => useContext(AuthContext);

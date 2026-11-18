import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { validateEmail, validatePassword, } from "./authValidation";

// Create Context
const AuthContext = createContext(null);

// Custom Hook
export const useAuth = () => useContext(AuthContext);

// Auth Provider
export function AuthProvider({ children }) {
  // Authentication States
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [userError, setUserError] = useState("");

  const [token, setToken] = useState(() => localStorage.getItem("token") || "");

  const [connected, setConnected] = useState(false);

  // Form States
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [rememberMe, setRememberMe] = useState(false);

  // Navigation
  const navigate = useNavigate();

  // Login
  const login = (userData, rememberMe) => {
    // call back

    if (rememberMe) {
      localStorage.setItem("token", token);
      setToken(token || "");
    }

    if (connected) {
      navigate("/");
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
    setConnected(false);
    navigate("/login");
  };

  // Get User After Login
  const getUserAfterLogin = () => {
    if (token) {
      // call back
    }

    setUserLoading(false);
  };

  // Check Authentication
  useEffect(() => {
    getUserAfterLogin();
  }, []);

  // Context Value
  const value = {
    // Authentication
    user,
    setUser,
    userLoading,
    userError,
    setUserError,
    connected,
    login,
    logout,

    // Email
    email,
    setEmail,
    emailError,
    setEmailError,
    validateEmail,

    // Password
    password,
    setPassword,
    passwordError,
    setPasswordError,
    validatePassword,

    // Remember Me
    rememberMe,
    setRememberMe,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
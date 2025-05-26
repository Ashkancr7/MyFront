import React, { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const isTokenExpired = (decoded) => {
    const currentTime = Date.now() / 1000;
    return decoded.exp && decoded.exp < currentTime;
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (isTokenExpired(decoded)) {
          logout();
        } else {
          setUser({ token, ...decoded });
        }
      } catch (err) {
        console.error("Invalid token", err);
        logout();
      }
    }
  }, []);

  const login = (token) => {
    try {
      const decoded = jwtDecode(token);
      if (isTokenExpired(decoded)) {
        console.error("Token is expired");
        return;
      }
      localStorage.setItem("token", token);
      setUser({ token, ...decoded });
    } catch (err) {
      console.error("Invalid token on login", err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

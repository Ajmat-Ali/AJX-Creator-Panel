import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

function AuthContext({ children }) {
  const [user, setUser] = useState(() => {
    const authUser = JSON.parse(localStorage.getItem("authUser"));
    return authUser ? authUser : null;
  });

  const login = (user) => {
    setUser(user);
    localStorage.setItem("authUser", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <LoginContext.Provider
      value={{ user, login, logout, isAuthenticated: user }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export default AuthContext;

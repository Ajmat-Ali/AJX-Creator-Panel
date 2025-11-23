import { createContext, useState } from "react";
export const LoginContext = createContext();

function AuthContext({ children }) {
  const [loginData, setLoginData] = useState({
    login: true,
  });

  return (
    <LoginContext.Provider value={{ loginData, setLoginData }}>
      {children}
    </LoginContext.Provider>
  );
}

export default AuthContext;

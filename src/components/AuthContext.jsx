import { createContext, useState } from "react";

export const LoginContext = createContext();

function AuthContext({ children }) {
  const [loginStatus, setLoginStatus] = useState(false);

  return (
    <LoginContext.Provider value={{ loginStatus, setLoginStatus }}>
      {children}
    </LoginContext.Provider>
  );
}

export default AuthContext;

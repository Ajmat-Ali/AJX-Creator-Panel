import { useContext } from "react";
import { Navigate } from "react-router";
import { LoginContext } from "./context/createContext";

function PrivateRoute({ children }) {
  const { isAuthenticated } = useContext(LoginContext);

  if (!isAuthenticated) {
    return <Navigate to={`/login`} />;
  }
  return children;
}

export default PrivateRoute;

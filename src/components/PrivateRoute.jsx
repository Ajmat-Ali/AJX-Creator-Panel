import { useContext } from "react";
import { Navigate } from "react-router";
import { LoginContext } from "./AuthContext";

function PrivateRoute({ children }) {
  const { loginStatus } = useContext(LoginContext);

  if (!loginStatus) {
    return <Navigate to={`/login`} />;
  }
  return children;
}

export default PrivateRoute;

import { Navigate } from "react-router";

function PrivateRoute({ children }) {
  let data = true;
  if (data) {
    return <Navigate to={`/login`} />;
  }
  return children;
}

export default PrivateRoute;

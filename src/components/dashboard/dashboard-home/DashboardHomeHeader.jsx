import { useContext } from "react";
import { LoginContext } from "../../context/createContext";
function DashboardHomeHeader() {
  const { user } = useContext(LoginContext);

  return (
    <div>
      <h2 className=" text-center text-3xl font-bold text-gray-800 mb-10 mt-4">
        Welcome back {user?.account?.firstName}
      </h2>
      <h1 className="text-2xl font-bold text-gray-800 mb-8">
        Dashboard Overview
      </h1>
    </div>
  );
}

export default DashboardHomeHeader;

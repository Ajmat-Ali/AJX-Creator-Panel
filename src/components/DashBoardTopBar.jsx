import { useContext } from "react";
import { LoginContext } from "./context/AuthContext";
function DashboardTopBar() {
  const { user } = useContext(LoginContext);
  console.log(user);

  return (
    <div className="p-4 border-3 border-y-green-500 bg-indigo-300">
      <h2 className="">Dashboard TopBAr...</h2>
      <h3 className="text-xl border p-2 bg-red-500 text-white">
        {user?.account?.firstName}
      </h3>
    </div>
  );
}

export default DashboardTopBar;

import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import Avatar from "../Avatar";
import { useContext } from "react";
import { LoginContext } from "../context/createContext";

function DashboardTopBar() {
  const { user } = useContext(LoginContext);

  return (
    <div className="h-16 px-6 flex items-center justify-between border-b border-gray-200 bg-white sticky top-0 z-40">
      {/* Left: Brand */}
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-extrabold tracking-tight text-gray-900">
          AjX Panel
        </h1>
      </div>

      {/* Right: User */}
      <div className="flex items-center gap-4">
        <Avatar src={user?.profile?.avatar} name={user?.account?.firstName} />
      </div>
    </div>
  );
}

export default DashboardTopBar;

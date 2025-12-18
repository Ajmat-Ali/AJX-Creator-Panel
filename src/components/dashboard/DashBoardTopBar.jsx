import { useContext } from "react";
import { LoginContext } from "../context/AuthContext";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import Avatar from "../Avatar";
function DashboardTopBar() {
  const { user } = useContext(LoginContext);

  return (
    <div className="p-4 border border-y-green-500 flex justify-end gap-x-20 flex-wrap | max-md:justify-between max-md:gap-10 | max-sm22:gap-x-2 max-sm22:gap-y-5">
      <div className="relative w-44">
        <select
          className="cursor-pointer appearance-none w-full px-10 py-2 text-sm font-medium
               border border-gray-300 rounded-md 
               bg-white text-gray-700
               focus:outline-none focus:ring-2 focus:ring-green-500/40 
               hover:border-gray-400 transition"
        >
          <option value="instagram">Instagram</option>
          <option value="youtube">YouTube</option>
          <option value="facebook">Facebook</option>
          <option value="twitter">Twitter</option>
        </select>

        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          📱
        </span>

        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
          ▾
        </span>
      </div>

      <Avatar src={user?.profile?.avatar} name={user?.account?.firstName} />
    </div>
  );
}

export default DashboardTopBar;

//  <BsInstagram size={30} color="#E1306C" />
//       <BsYoutube size={30} color="#FF0000" />
//       <BsFacebook size={30} color="#1877F2" />
//       <BsTwitter size={30} color="#000000" />

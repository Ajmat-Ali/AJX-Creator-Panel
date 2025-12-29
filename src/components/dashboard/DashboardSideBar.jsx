import { TiHome } from "react-icons/ti";
import { MdSchedule } from "react-icons/md";
import { BiBookContent } from "react-icons/bi";
import { GiProgression } from "react-icons/gi";
import { RiAiGenerate } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router";
import { useContext, useState } from "react";
import { LuPanelLeftOpen, LuPanelRightOpen } from "react-icons/lu";

import { LoginContext } from "../context/createContext";

function DashboardSideBar() {
  const [toggle, setToggle] = useState(true);
  const { logout } = useContext(LoginContext);

  const handleLogOut = () => {
    logout();
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="p-5 pr-8 shadow-2xl  border-double  overflow-y-auto | max-md:w-screen flex flex-col gap-y-5 max-md:flex-row max-md:gap-x-15 max-md:justify-evenly">
      <div className="flex justify-end max-md:hidden">
        <button
          onClick={handleToggle}
          className="cursor-pointer max-w-fit text-2xl "
        >
          {toggle ? <LuPanelRightOpen /> : <LuPanelLeftOpen />}
        </button>
      </div>
      <SideBarContent
        icon={<TiHome title={"Dashboard"} />}
        text="Dashboard"
        linkUrl="/dashboard"
        toggle={toggle}
      />
      <SideBarContent
        icon={<BiBookContent title={"Content Ideas"} />}
        text="Content Ideas"
        linkUrl="contentIdea"
        toggle={toggle}
      />
      <SideBarContent
        icon={<RiAiGenerate title={"Script Generator"} />}
        text="Script Generator"
        linkUrl="scriptGenerator"
        toggle={toggle}
      />
      <SideBarContent
        icon={<MdSchedule title={"Scheduled Post"} />}
        text="Scheduled Post"
        linkUrl="schedulePost"
        toggle={toggle}
      />
      <SideBarContent
        icon={<GiProgression title={"Content Performance"} />}
        text="Content Performance"
        linkUrl="growthTracker"
        toggle={toggle}
      />

      <button onClick={handleLogOut} className="cursor-pointer">
        <div className={` flex items-center gap-2`}>
          <span className="text-xl">{<TbLogout title={"Logout"} />}</span>
          <span
            className={`
          whitespace-nowrap
          transition-all duration-300 ease-in-out
          max-md:hidden
          ${
            toggle
              ? "opacity-100 translate-x-0 max-w-[200px]"
              : "opacity-0 -translate-x-2 max-w-0"
          }
        `}
          >
            Logout
          </span>
        </div>
      </button>
    </div>
  );
}

export default DashboardSideBar;

function SideBarContent({ icon, text, linkUrl, toggle }) {
  return (
    <Link to={linkUrl}>
      <div className={` flex items-center gap-2`}>
        <span className="text-xl ">{icon}</span>
        <span
          className={`
          whitespace-nowrap
          transition-all duration-300 ease-in-out
          max-md:hidden
          overflow-hidden
          ${
            toggle
              ? "opacity-100 translate-x-0 max-w-[200px]"
              : "opacity-0 -translate-x-2 max-w-0"
          }
        `}
        >
          {text}
        </span>
      </div>
    </Link>
  );
}

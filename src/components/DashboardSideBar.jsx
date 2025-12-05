import { TiHome } from "react-icons/ti";
import { MdSchedule } from "react-icons/md";
import { BiBookContent } from "react-icons/bi";
import { GiProgression } from "react-icons/gi";
import { RiAiGenerate } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router";
import { useContext } from "react";
import { LoginContext } from "./AuthContext";

function DashboardSideBar() {
  const { setLoginStatus } = useContext(LoginContext);
  const handleLogOut = () => {
    setLoginStatus(false);
  };

  return (
    <div className="w-64 p-4  border-r-4 border-black overflow-y-auto max-md:w-screen | flex flex-col gap-y-5 max-md:flex-row max-md:gap-x-15 max-md:justify-evenly ">
      <SideBarContent icon={<TiHome />} text="Dashboard" linkUrl="/dashboard" />
      <SideBarContent
        icon={<BiBookContent />}
        text="Content Ideas"
        linkUrl="contentIdea"
      />
      <SideBarContent
        icon={<MdSchedule />}
        text="Scheduled Post"
        linkUrl="schedulePost"
      />
      <SideBarContent
        icon={<GiProgression />}
        text="Content Performance"
        linkUrl="growthTracker"
      />
      <SideBarContent
        icon={<RiAiGenerate />}
        text="Script Generator"
        linkUrl="scriptGenerator"
      />

      <button onClick={handleLogOut}>
        <div className={` flex items-center gap-2`}>
          <span className="text-xl">{<TbLogout />}</span>
          <span className="max-md:hidden">{"Logout"}</span>
        </div>
      </button>
    </div>
  );
}

export default DashboardSideBar;

function SideBarContent({ icon, text, linkUrl }) {
  return (
    <Link to={linkUrl}>
      <div className={` flex items-center gap-2`}>
        <span className="text-xl">{icon}</span>
        <span className="max-md:hidden">{text}</span>
      </div>
    </Link>
  );
}

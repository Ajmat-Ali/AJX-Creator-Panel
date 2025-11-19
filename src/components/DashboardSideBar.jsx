import { TiHome } from "react-icons/ti";
import { MdSchedule } from "react-icons/md";
import { BiBookContent } from "react-icons/bi";
import { GiProgression } from "react-icons/gi";
import { RiAiGenerate } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router";

function DashboardSideBar() {
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
      <SideBarContent icon={<TbLogout />} text="Logout" />
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

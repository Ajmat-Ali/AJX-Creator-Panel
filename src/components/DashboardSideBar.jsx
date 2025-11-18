import { useState } from "react";

function DashboardSideBar() {
  const [showIcon, setShowIcon] = useState(true);

  return (
    <div className="w-64 p-4  border-r-4 border-black overflow-y-auto max-md:w-screen | flex flex-col gap-y-5 max-md:flex-row max-md:gap-x-5 max-md:justify-evenly ">
      {/* <div className="flex flex-col gap-y-5 max-md:flex-row max-md:gap-x-5 max-md:justify-evenly"> */}
      <SideBarContent icon={"🛖"} text="Home" />
      <SideBarContent icon={"💡"} text="Content Idea" />
      {/* <div
        onClick={() => {
          setShowIcon(!showIcon);
        }}
        className="md:hidden"          ------------ 3 Dot Button
      >
        <button>⋮</button>
      </div> */}

      <SideBarContent icon={"📼"} text="Video Planner" />
      <SideBarContent icon={"📈"} text="Content Performance" />
      <SideBarContent icon={"📜"} text="Script Generator" />
    </div>
    // </div>
  );
}

export default DashboardSideBar;

function SideBarContent({ icon, text }) {
  return (
    <div>
      {icon}
      <span className="max-md:hidden">{text}</span>
    </div>
  );
}

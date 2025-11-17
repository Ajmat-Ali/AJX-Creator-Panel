import DashboardMain from "../components/DashboardMain";
import DashboardSideBar from "../components/DashboardSideBar";
import DashboardTopBar from "../components/DashBoardTopBar";

function DashboardLayout() {
  return (
    <div className="h-screen border-2 flex flex-col border-red-500 ">
      <div>
        <DashboardTopBar />
      </div>
      <div className="flex flex-1 overflow-hidden">
        <DashboardSideBar />
        <DashboardMain />
      </div>
    </div>
  );
}

export default DashboardLayout;

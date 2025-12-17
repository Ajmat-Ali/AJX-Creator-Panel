import DashboardMain from "../components/dashboard/DashboardMain";
import DashboardSideBar from "../components/dashboard/DashboardSideBar";
// import DashboardTopBar from "../components/dashboard/DashBoardTopBar";

function DashboardLayout() {
  return (
    <div className=" h-screen flex flex-1 overflow-hidden max-md:flex-col-reverse">
      <DashboardSideBar />
      <DashboardMain />
    </div>
  );
}

export default DashboardLayout;

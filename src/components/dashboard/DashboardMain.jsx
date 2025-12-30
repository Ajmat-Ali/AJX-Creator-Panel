import { Outlet } from "react-router";
import DashboardTopBar from "./DashBoardTopBar";

function DashboardMain() {
  return (
    <div className="flex-1 overflow-auto">
      <div>
        <DashboardTopBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
export default DashboardMain;

import DashboardHomeHeader from "./DashboardHomeHeader";
import PerformanceChart from "./PerformanceChart";
import RecentMain from "./RecentMain";

function DashboardHome() {
  return (
    <div>
      <DashboardHomeHeader />
      <PerformanceChart />
      <RecentMain />
    </div>
  );
}

export default DashboardHome;

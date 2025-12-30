import DashboardHomeHeader from "./DashboardHomeHeader";
import PerformanceChart from "./PerformanceChart";
import RecentMain from "./RecentMain";

function DashboardHome() {
  return (
    <div className="p-8">
      <DashboardHomeHeader />
      <PerformanceChart />
      <RecentMain />
    </div>
  );
}

export default DashboardHome;

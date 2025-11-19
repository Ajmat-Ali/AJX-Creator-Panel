import { Route } from "react-router";
import { Routes } from "react-router";

// ------------------------------------------- Local Import --------------------------------------------
import Home from "../pages/Home";
import DashboardLayout from "../pages/DashboardLayout";

// ------------------------------------------- Dashboard Components Import ------------------------------
import DashboardHome from "../pages/DashboardHome";
import ContentIdea from "../pages/ContentIdea";
import GrowthTracker from "../pages/GrowthTracker";
import SchedulePost from "../pages/SchedulePost";
import ScriptGenerator from "../pages/ScriptGenerator";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="contentIdea" element={<ContentIdea />} />
        <Route path="schedulePost" element={<SchedulePost />} />
        <Route path="growthTracker" element={<GrowthTracker />} />
        <Route path="scriptGenerator" element={<ScriptGenerator />} />
        {/* <Route path="logout" /> */}
      </Route>
    </Routes>
  );
}

export default AllRoutes;

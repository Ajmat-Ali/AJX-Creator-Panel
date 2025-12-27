import { Route } from "react-router";
import { Routes } from "react-router";

// ------------------------------------------- Local Import --------------------------------------------
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Login from "../pages/Login";
import DashboardLayout from "../pages/DashboardLayout";
import PrivateRoute from "../components/PrivateRoute";
import Review from "../components/steps/Review";

// ------------------------------------------- Dashboard Components Import ------------------------------
import DashboardHome from "../components/dashboard/dashboard-home/DashboardHome";
import ContentIdea from "../components/dashboard/content-Idea/ContentIdea";
import ScriptGenerator from "../components/dashboard/script-generator/Script";
import SchedulePost from "../components/dashboard/scheduled-post/SchedulePost";
import GrowthTracker from "../components/dashboard/GrowthTracker";

// ------------------------------------------- Signin (MultiSteps) Components Import ------------------------------

import NotFound from "../pages/NotFound";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="signin" element={<Signin />} />

      <Route path="dashboard" element={<DashboardLayout />}>
        <Route
          index
          element={
            <PrivateRoute>
              <DashboardHome />
            </PrivateRoute>
          }
        />
        <Route
          path="contentIdea"
          element={
            <PrivateRoute>
              <ContentIdea />
            </PrivateRoute>
          }
        />
        <Route
          path="schedulePost"
          element={
            <PrivateRoute>
              <SchedulePost />
            </PrivateRoute>
          }
        />
        <Route
          path="growthTracker"
          element={
            <PrivateRoute>
              <GrowthTracker />
            </PrivateRoute>
          }
        />
        <Route
          path="scriptGenerator"
          element={
            <PrivateRoute>
              <ScriptGenerator />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AllRoutes;

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
import DashboardHome from "../components/DashboardHome";
import ContentIdea from "../components/ContentIdea";
import GrowthTracker from "../components/GrowthTracker";
import SchedulePost from "../components/SchedulePost";
import ScriptGenerator from "../components/ScriptGenerator";

// ------------------------------------------- Signin (MultiSteps) Components Import ------------------------------
import Step1Account from "../components/steps/Step1Account";
import Step2Profile from "../components/steps/Step2Profile";
import Step3Preference from "../components/steps/Step3Preference";
import NotFound from "../pages/NotFound";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route path="signin" element={<Signin />}>
        {/* <Route index element={<Step1Account />} />
        <Route path="step2Profile" element={<Step2Profile />} />
        <Route path="step3Preference" element={<Step3Preference />} />
        <Route path="reviewFormDetails" element={<Review />} /> */}
      </Route>

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

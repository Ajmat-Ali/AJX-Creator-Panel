import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
// import AuthContext from "./components/AuthContext.jsx";
import AuthContext from "./components/context/AuthContext.jsx";
import AllContext from "./components/context/AllContext.jsx";
import GlobalContentIdeaContext from "./components/context/GlobalContentIdeaContext.jsx";
import GlobalSchedulePostContext from "./components/context/GlobalSchedulePostContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <GlobalContentIdeaContext>
        <GlobalSchedulePostContext>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </GlobalSchedulePostContext>
      </GlobalContentIdeaContext>
    </AuthContext>
  </StrictMode>
);

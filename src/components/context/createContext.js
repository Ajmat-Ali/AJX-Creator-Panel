import { createContext } from "react";

export const LoginContext = createContext();

export const GlobalContentIdeaContextCreated = createContext(null);
export const GlobalSchedulePostContextCreated = createContext(null);

// --------------------------------------------- Local Context with respect to each section --------------------------
export const IdeaContext = createContext(null);
export const ScheduleContext = createContext(null);

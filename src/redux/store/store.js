import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "../features/projects/projectsSlice";
import uiReducer from "../features/ui/uiSlice";

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    ui: uiReducer,
  },
});

export default store;

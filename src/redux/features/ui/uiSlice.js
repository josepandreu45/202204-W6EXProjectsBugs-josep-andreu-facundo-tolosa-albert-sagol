import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    modal: "",
    loading: false,
    error: false,
    theme: "light",
  },
  reducers: {
    setLoadingOn: (ui) => ({ ...ui, loading: true }),
    setLoadingOff: (ui) => ({ ...ui, loading: false }),
    openModal: (ui, action) => ({ ...ui, modal: action.payload }),
    closeModal: (ui) => ({ ...ui, modal: "" }),
    setErrorOn: (ui) => ({ ...ui, error: true }),
    setErrorOff: (ui) => ({ ...ui, error: false }),
    toggleTheme: (ui) => ({
      ...ui,
      theme: ui.theme === "dark" ? "light" : "dark",
    }),
  },
});

export default uiSlice.reducer;

export const {
  setLoadingOn: setLoadingOnActionCreator,
  setLoadingOff: setLoadingOffActionCreator,
  openModal: openModalActionCreator,
  closeModal: closeModalActionCreator,
  setErrorOn: setErrorOnActionCreator,
  setErrorOff: setErrorOffActionCreator,
} = uiSlice.actions;

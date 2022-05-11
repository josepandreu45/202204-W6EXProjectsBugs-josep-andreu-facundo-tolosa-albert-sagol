import axios from "axios";
import {
  loadProjectsActionCreator,
  removeProjectActionCreator,
} from "../features/projects/projectsSlice";
import {
  openModalActionCreator,
  setErrorOffActionCreator,
  setErrorOnActionCreator,
  setLoadingOffActionCreator,
  setLoadingOnActionCreator,
} from "../features/ui/uiSlice";

export const loadProjectsThunk = () => async (dispatch) => {
  dispatch(setLoadingOnActionCreator());
  try {
    const { data: projects } = await axios.get(process.env.REACT_APP_API_URL);
    dispatch(loadProjectsActionCreator(projects));
  } catch {
    dispatch(setErrorOnActionCreator());
    dispatch(openModalActionCreator("Tot malament"));
  } finally {
    dispatch(setLoadingOffActionCreator());
  }
};

export const deleteProjectThunk = (id) => async (dispatch) => {
  dispatch(setLoadingOnActionCreator());

  try {
    const { status } = await axios.delete(
      `${process.env.REACT_APP_API_URL}${id}`
    );

    if (status === 200) {
      dispatch(removeProjectActionCreator(id));
      dispatch(setErrorOffActionCreator());
      dispatch(openModalActionCreator("S'ha esborrat l'item del llistat"));
    }
  } catch {
    dispatch(setErrorOnActionCreator());
    dispatch(openModalActionCreator("Tot malament"));
  } finally {
    dispatch(setLoadingOffActionCreator());
  }
};

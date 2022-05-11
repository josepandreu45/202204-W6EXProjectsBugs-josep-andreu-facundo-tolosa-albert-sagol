import mockProjects from "../../mocks/projects";
import {
  loadProjectsActionCreator,
  removeProjectActionCreator,
} from "../features/projects/projectsSlice";
import { openModalActionCreator } from "../features/ui/uiSlice";
import { deleteProjectThunk, loadProjectsThunk } from "./projectsThunks";

describe("Given a load projects thunk", () => {
  describe("When it's invoked", () => {
    test("Then it should call dispatch passing it a load action with a list of projects", async () => {
      const thunk = loadProjectsThunk();
      const dispatch = jest.fn();
      const projects = mockProjects;
      const expectedAction = loadProjectsActionCreator(projects);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given a delete project thunk", () => {
  describe("When it's invoked and the project id is 1", () => {
    const id = 1;

    test("Then it should call dispatch with a delete project 1 action", async () => {
      const dispatch = jest.fn();
      const thunk = deleteProjectThunk(id);
      const expectedAction = removeProjectActionCreator(id);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    test("Then it should call dispatch with an open modal action with the text 'S'ha esborrat l'item del llistat'", async () => {
      const text = "S'ha esborrat l'item del llistat";
      const thunk = deleteProjectThunk(id);
      const dispatch = jest.fn();
      const expectedAction = openModalActionCreator(text);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When it's invoked and the project id is 1000", () => {
    test("Then it should not call dispatch", async () => {
      const id = 1000;
      const thunk = deleteProjectThunk(id);
      const dispatch = jest.fn();
      const action = removeProjectActionCreator(id);

      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalledWith(action);
    });
  });
});

import projectsReducer, {
  addProjectActionCreator,
  loadProjectsActionCreator,
} from "./projectsSlice";

describe("Given a projects reducer", () => {
  describe("When it receives a list of projects and an unkown action", () => {
    test("Then it should return the received list of projects", () => {
      const projects = [
        {
          id: 1,
          name: "Project 1",
        },
        {
          id: 2,
          name: "Project 2",
        },
      ];

      const unknownAction = {
        type: "unknown",
      };

      const newProjects = projectsReducer(projects, unknownAction);

      expect(newProjects).toEqual(projects);
    });
  });

  describe("When it receives an empty list and a load action with two new projects", () => {
    test("Then it should return a list with the two new projects", () => {
      const projects = [];
      const loadedProjects = [
        {
          id: 1,
          name: "New project 1",
        },
        {
          id: 2,
          name: "New project 2",
        },
      ];

      const loadAction = loadProjectsActionCreator(loadedProjects);

      const newProjects = projectsReducer(projects, loadAction);

      expect(newProjects).toEqual(loadedProjects);
    });
  });

  describe("When it receives a list with one project and an add action with a new project", () => {
    test("Then it should return a list with the two projects", () => {
      const projects = [
        {
          id: 1,
          name: "Old project",
        },
      ];
      const newProject = { id: 2, name: "New project" };

      const addAction = addProjectActionCreator(newProject);

      const newProjects = projectsReducer(projects, addAction);

      expect(newProjects).toContain(projects[0]);
      expect(newProjects).toContain(newProject);
    });
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store/store";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading with 'Fake project 2' inside", async () => {
      const headingText = "Fake project 2";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const fakeProject2Heading = await screen.findByRole("heading", {
        name: headingText,
      });

      expect(fakeProject2Heading).toBeInTheDocument();
    });
  });

  describe("When it's rendered and the user clicks on 'New project'", () => {
    test("Then it should show a heading with 'Form project page' inside", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const newProjectLink = screen.getByRole("link", { name: /new project/i });

      userEvent.click(newProjectLink);

      const headingForm = screen.getByRole("heading", {
        name: /form project page/i,
      });

      expect(headingForm).toBeInTheDocument();
    });
  });

  describe.skip("When it's rendered with path /projects/edit/2", () => {
    test("Then it should show an input with 'Fake project 2' inside", async () => {
      const expectedName = "Fake project 2";

      render(
        <MemoryRouter initialEntries={["/projects/edit/2"]}>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>
      );

      const inputFakers2 = await screen.findByLabelText("Name:");

      expect(inputFakers2).toHaveValue(expectedName);
    });
  });
});

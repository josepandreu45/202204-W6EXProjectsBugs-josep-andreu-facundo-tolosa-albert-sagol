import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import FormProject from "./FormProject";
import store from "../../redux/store/store";
import userEvent from "@testing-library/user-event";
import { addProjectActionCreator } from "../../redux/features/projects/projectsSlice";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a FormProject component", () => {
  describe("When the user types 'hello' in the name input", () => {
    test("Then its value should be 'hello'", () => {
      const text = "hello";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <FormProject />
          </Provider>
        </BrowserRouter>
      );

      const nameInput = screen.getByLabelText("Name:");

      expect(nameInput).toHaveValue("");

      userEvent.type(nameInput, text);

      expect(nameInput).toHaveValue(text);
    });

    test("Then the submit button should be enabled", () => {
      const text = "hello";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <FormProject />
          </Provider>
        </BrowserRouter>
      );

      const submitButton = screen.getByRole("button", { name: /add/i });
      const inputName = screen.getByLabelText("Name:");

      userEvent.type(inputName, text);

      expect(submitButton).not.toBeDisabled();
    });
  });

  describe("When it's rendered", () => {
    test("Then the submit button is disabled", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <FormProject />
          </Provider>
        </BrowserRouter>
      );

      const submitButton = screen.getByRole("button", { name: /add/i });

      expect(submitButton).toBeDisabled();
    });
  });

  describe("When its rendered and the user submits the form", () => {
    test("Then it should call the dispatch function", () => {
      const newProjectName = "Amazing countries";
      const expectedAction = addProjectActionCreator({
        id: 1000,
        name: newProjectName,
      });

      render(
        <BrowserRouter>
          <Provider store={store}>
            <FormProject />
          </Provider>
        </BrowserRouter>
      );

      const submitButton = screen.getByRole("button", { name: /add/i });
      const inputName = screen.getByLabelText("Name:");

      userEvent.type(inputName, newProjectName);
      userEvent.click(submitButton);

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

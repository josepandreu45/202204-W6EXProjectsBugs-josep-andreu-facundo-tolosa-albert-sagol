import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addProjectActionCreator,
  updateProjectActionCreator,
} from "../../redux/features/projects/projectsSlice";

const FormProject = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const projects = useSelector((state) => state.projects);
  let project = useRef();

  useEffect(() => {
    project.current = projects.find((project) => project.id === id);
    setName(project.current?.name || "");
  }, [id, projects]);

  const [name, setName] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };

  const submitName = (event) => {
    event.preventDefault();

    if (name === "") {
      return;
    }

    if (id) {
      dispatch(updateProjectActionCreator({ ...project.current, name }));
    } else {
      const newProject = {
        id: 1000,
        name,
      };

      dispatch(addProjectActionCreator(newProject));
    }

    navigate("/projects");
  };

  return (
    <form noValidate autoComplete="off" onSubmit={submitName}>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" value={name} onChange={changeName} />
      <button type="submit" disabled={name === ""}>
        {id ? "Update" : "Add"}
      </button>
    </form>
  );
};

FormProject.propTypes = {
  id: PropTypes.number,
};

export default FormProject;

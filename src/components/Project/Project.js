import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProjectThunk } from "../../redux/thunks/projectsThunks";
import projectSchema from "../../schemas/projectSchema";

const Project = ({ project: { id, name } }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteProject = () => {
    dispatch(deleteProjectThunk(id));
  };

  const editProject = () => {
    navigate(`/projects/edit/${id}`);
  };

  return (
    <article className="project">
      <h3>{name}</h3>
      <p>Id: {id}</p>
      <button onClick={editProject}>Edit</button>
      <button onClick={deleteProject}>Delete</button>
    </article>
  );
};

Project.propTypes = {
  project: projectSchema.isRequired,
};

export default Project;

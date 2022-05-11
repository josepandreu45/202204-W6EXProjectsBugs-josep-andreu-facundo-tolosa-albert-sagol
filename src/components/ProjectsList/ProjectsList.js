import PropTypes from "prop-types";
import projectSchema from "../../schemas/projectSchema";
import Project from "../Project/Project";

const ProjectsList = ({ projects }) => {
  return (
    <ul className="projects">
      {projects.map((project) => (
        <li key={project.id}>
          <Project project={project} />
        </li>
      ))}
    </ul>
  );
};

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(projectSchema).isRequired,
};

export default ProjectsList;

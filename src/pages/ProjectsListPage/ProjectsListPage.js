import { useSelector } from "react-redux";
import ProjectsList from "../../components/ProjectsList/ProjectsList";

const ProjectsListPage = () => {
  const projects = useSelector((state) => state.projects);

  return (
    <>
      <h2>Projects list</h2>
      <ProjectsList projects={projects} />
    </>
  );
};

export default ProjectsListPage;

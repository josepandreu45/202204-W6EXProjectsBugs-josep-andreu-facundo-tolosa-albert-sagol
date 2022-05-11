import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="main-navigation">
      <ul>
        <li>
          <Link to="/projects">Projects list</Link>
        </li>
        <li>
          <Link to="/new-project">New project</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

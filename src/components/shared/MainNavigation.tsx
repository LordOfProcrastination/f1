import { Link } from "react-router-dom";

// Komponent for navigering. Her kan det settes inn linker til navigering i nav-baren
const MainNavigation = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-5">
      <div className="navbar-collapse collapse d-flex justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="drivers">
              Drivers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="teams">
              Teams
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="quiz">
              Quiz
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="registration">
              Registration
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="admin">
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;

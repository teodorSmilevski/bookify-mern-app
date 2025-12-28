import { Link } from "react-router-dom";
import { useUser } from "../../../context/UserContext";
import "./Navbar.scss";

const Navbar = () => {
  const { user } = useUser();

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          Bookify
        </Link>
        <div className="navbar__links">
          <Link to="/" className="navbar__link">
            Home
          </Link>
          <Link to="/login" className="navbar__link">
            {user?.name || "Login"}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

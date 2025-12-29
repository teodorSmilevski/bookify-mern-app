import { Link } from "react-router-dom";
import { useUser } from "../../../context/UserContext";
import "./Navbar.scss";

const Navbar = () => {
  const { user } = useUser();

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">📅</span>
          <span className="navbar__logo-text">Bookify</span>
        </Link>
        <div className="navbar__info">
          <span className="navbar__hours">⏰ Mon-Sat: 10AM - 6PM</span>
        </div>
        <div className="navbar__links">
          <Link to="/" className="navbar__link">
            Book Now
          </Link>
          <Link to="/login" className="navbar__link navbar__link--user">
            {user?.name || "Login"}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

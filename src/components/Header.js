import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div>
        <Link className="logo" to="/">
          Book Store
        </Link>
      </div>
      <div className="search-box">
        <input className="search-input" type="text" placeholder="Search" />
        <button className="search-btn">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="lg"
            className="white-icon"
          />
        </button>
      </div>

      <div className="customer-service">
        <Link to="/singup">Sign up</Link>
        <Link to="/login">Log in</Link>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import sun from "./Icons/sun.svg"
import moon from "./Icons/moon.svg"
import { useLocation } from 'react-router-dom'

export default function Navbar(props) {
  const location = useLocation();

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} sticky-top bg-body-tertiary d-flex`}
      data-bs-theme={props.mode}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active fw-semibold' : ''}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/about' ? 'active fw-semibold' : ''}`} to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/contact' ? 'active fw-semibold' : ''}`} to="/contact">
                {props.contact}
              </Link>
            </li>
          </ul>

          <span className="mx-2 my-1"
            onClick={props.toggleMode}
          >
            <img key={props.mode} className="icons icons-animation" src={props.mode === "light" ? moon : sun} alt={props.mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"} />
          </span>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <button className={`btn  btn-${props.mode === "light" ? "dark" : "outline-light"} btn-lg px-4 me-md-2`}
              type="submit">
              Search
            </button>
          </form> */}
        </div>


      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set Your title",
  contact: "Contact Us",
  // Mode: "light0.0",
};

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Navbar(props) {
  return (
    <>
      <div className="mb-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand mx-3" to="/">
            {props.navTitle}
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto mx-3">
              <li className="nav-item active">
                <Link className="nav-link" to="/Home">
                  {props.header1}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.header2}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

Navbar.propTypes = {
  navTitle: PropTypes.string.isRequired,
  header1: PropTypes.string.isRequired,
  header2: PropTypes.string.isRequired,
};
import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  style={{ cursor: "pointer" }}
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleMode}
                />
                <label
                  class="form-check-label text-light"
                  for="flexSwitchCheckDefault"
                >
                  Enable Dark Mode
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

// check for props
export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string,
};

// Set Default props if props are NOT defined
Navbar.defaultProps = {
  title: "Set title here",
};

import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#5072A7" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ color: "#E6E6FA" }}>
            Rent-Tech
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
                <Link
                  className="nav-link "
                  aria-current="page"
                  to="/"
                  style={{ color: "#E6E6FA" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  style={{ color: "#E6E6FA" }}
                >
                  About
                </Link>
              </li>
              <form
                className="d-flex"
                role="search"
                style={{ marginLeft: "270px" }}
              >
                <input
                  style={{ width: "400px" }}
                  className="form-control me-2"
                  type="search"
                  placeholder="Search Products"
                  aria-label="Search"
                />
                <button className="btn btn-light" type="submit">
                  Search
                </button>
              </form>
            </ul>
          </div>

          <Link className="btn btn-light mx-2" to="/login">
            LogIn
          </Link>
          <Link className="btn btn-light mx-2" to="/signup">
            SignUp
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

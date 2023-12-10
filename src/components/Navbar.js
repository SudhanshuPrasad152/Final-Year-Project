import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#5072A7" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ color: "#E6E6FA" }}>
            <img
              src={require("../images/Website Logo.jpg")}
              alt=""
              className="logo"
            />
          </Link>
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
              {/* <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  style={{ color: "#E6E6FA" }}
                >
                  About
                </Link>
              </li> */}
              {/* <form
                className="d-flex justify-content-center"
                role="search"
                style={{ marginLeft: "260px" }}
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
              </form> */}
            </ul>
          </div>
          <Link
            to="/signup"
            className="btn btn-light"
            style={
              localStorage.getItem("token") &&
              localStorage.getItem("role") === "Customer"
                ? { marginRight: "125px" }
                : { marginRight: "80px" }
            }
          >
            Want to Rent Something?
          </Link>
          {localStorage.getItem("token") &&
          localStorage.getItem("role") === "Customer" ? (
            <button className="btn btn-light" onClick={handleClick}>
              LogOut
            </button>
          ) : (
            <form>
              <Link className="btn btn-light mx-2" to="/login">
                LogIn
              </Link>
              <Link className="btn btn-light mx-2" to="/signup">
                SignUp
              </Link>
            </form>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import backimg from "../images/backimg.png";
const Login = () => {
  document.body.style.backgroundImage = `url(${backimg})`;
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundRepeat = "no-repeat";

  let navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <>
      <div className="container my-5 d-flex justify-content-center ">
        <form
          className="cred border border-white"
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <h2 className="my-3">Log In to your Account</h2>
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
            />
            <div
              id="emailHelp"
              className="form-text"
              style={{ color: "white" }}
            >
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-light"
            style={{ marginLeft: "380px", color: "black" }}
          >
            Log In
          </button>
        </form>
      </div>
      <div
        className="container d-flex justify-content-center"
        style={{ marginTop: "-25px", color: "white" }}
      >
        <p>New to Rent-Tech?</p>
        <Link
          to="/signup"
          className="mx-2"
          style={{ textDecoration: "none", color: "#FFFFF0" }}
        >
          <strong>Join Now</strong>
        </Link>
      </div>
    </>
  );
};

export default Login;

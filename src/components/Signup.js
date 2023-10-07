import React from "react";
import { Link, useNavigate } from "react-router-dom";
import backimg from '../images/backimg.png'
const Signup = () => {
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
      <div className="container d-flex justify-content-center my-5">
        <form className="cred border border-white" onSubmit={handleSubmit}>
          <h2 className="my-3">Sign Up to use Rent-Tech</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Username
            </label>
            <input type="text" className="form-control" id="name" name="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              name="email"
            />
            <div id="emailHelp" className="form-text" style={{color: "white"}}>
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
              minLength={5}
              required
            />
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="cpassword"
                name="cpassword"
                minLength={5}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-light "
            style={{ marginLeft: "380px", color: 'black' }}
          >
            Sign Up
          </button>
        </form>
      </div>
      <div
        className="container d-flex justify-content-center"
        style={{ marginTop: "-25px", color: "black" }}
      >
        <p>Already on Rent-Tech?</p>
        <Link
          to="/login"
          className="mx-2"
          style={{ textDecoration: "none", color: "black" }}
        >
          <strong>Log in</strong>
        </Link>
      </div>
    </>
  );
};

export default Signup;

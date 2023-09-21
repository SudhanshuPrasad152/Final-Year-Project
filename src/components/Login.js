import React from "react";

const Login = () => {
  document.body.style.background =
    "linear-gradient(to right, #fc00ff, #00dbde)";
  return (
    <>
      <div className="container my-5 d-flex justify-content-center ">
        <form className="cred">
          <div className="mb-3">
            <h2 className="my-3">Login to your Account</h2>
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
            <div id="emailHelp" className="form-text">
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
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginLeft: "380px" }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;

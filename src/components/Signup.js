import React from "react";

const Signup = () => {
  document.body.style.background =
    "linear-gradient(to right, #fc00ff, #00dbde)";
  return (
    <div className="container d-flex justify-content-center my-5">
      <form className="cred">
        <h2 className="my-3">SignUp to use Rent-Tech</h2>
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
          className="btn btn-primary"
          style={{ marginLeft: "380px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;

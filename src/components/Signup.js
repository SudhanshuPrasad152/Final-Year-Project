import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backimg from "../images/backimg.png";
const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    role: "",
  });
  document.body.style.backgroundImage = `url(${backimg})`;
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundRepeat = "no-repeat";

  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.cpassword) {
      alert("Password doesn't match");
      return;
    }
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        role: credentials.role,
      }),
    });

    const json = await response.json();
    if (json.success) {
      navigate("/login");
    } else {
      alert("Enter Valid Credentials or try with different email");
    }
  };

  const handleClick = () => {
    let x = document.getElementById("password");
    let y = document.getElementById("cpassword");
    if (x.type === "password") {
      x.type = "text";
      y.type = "text";
    } else {
      x.type = "password";
      y.type = "password";
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container d-flex justify-content-center my-4">
        <form className="cred border border-white" onSubmit={handleSubmit}>
          <h2 className="my-3">Sign Up to use Rent-Tech</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              onChange={handleChange}
            />
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
              onChange={handleChange}
              autoComplete="on"
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
              minLength={5}
              autoComplete="off"
              onChange={handleChange}
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
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 my-2">
              <input
                className="form-check-input"
                type="checkbox"
                onClick={handleClick}
              />
              <label htmlFor="showPass" className="form-label mx-2">
                Show Passwords
              </label>
            </div>
            <div className="mb-3 d-flex justify-content-evenly">
              <label htmlFor="role" className="form-laber">
                Choose your Role:
              </label>
              <select
                defaultValue={"DEFAULT"}
                className="form-select form-select-sm"
                name="role"
                aria-label="Default select example"
                style={{ width: "50%" }}
                onChange={handleChange}
              >
                <option value="DEFAULT" disabled>
                  Select one--
                </option>
                <option value="Renter">Renter</option>
                <option value="Customer">Customer</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-light"
            style={{
              padding: "15px 185px",
              marginTop: "15px",
              borderRadius: "100px",
            }}
          >
            <strong>Sign Up</strong>
          </button>
        </form>
      </div>
      <div
        className="container d-flex justify-content-center my-2"
        style={{ marginTop: "-25px", color: "black", fontSize: '20px' }}
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

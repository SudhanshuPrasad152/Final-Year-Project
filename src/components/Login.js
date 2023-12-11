import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backimg from "../images/backimg.png";
const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    role: "",
  });
  document.body.style.backgroundImage = `url(${backimg})`;
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundRepeat = "no-repeat";

  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
        role: credentials.role,
      }),
    });

    const json = await response.json();
    if (json.success && json.role === "Customer") {
      localStorage.setItem("token", json.authToken);
      localStorage.setItem("role", json.role);
      localStorage.setItem("email", json.email);
      localStorage.setItem("name", json.name);
      navigate("/");
    } else if (json.success && json.role === "Renter") {
      localStorage.setItem("token", json.authToken);
      localStorage.setItem("role", json.role);
      localStorage.setItem("email", json.email);
      navigate("/rent-item");
    } else {
      alert("Login with valid credentials");
    }
  };

  const handleClick = () => {
    let x = document.getElementById("password");
    if (x.type === "password") x.type = "text";
    else x.type = "password";
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container my-5 d-flex justify-content-center ">
        <form className="cred border border-white" onSubmit={handleSubmit}>
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
              value={credentials.email}
              onChange={handleChange}
              autoComplete="off"
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
              value={credentials.password}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <div className="mb-3 my-2 d-flex justify-content-between">
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  onClick={handleClick}
                />
                <label htmlFor="showPass" className="form-label mx-2">
                  Show Password
                </label>
              </div>

              <Link to="/forgot-password" style={{ textDecoration: "none" }}>
                Forgot Password?
              </Link>
            </div>
          </div>
          <div className="mb-3 d-flex justify-content-evenly mt-4">
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
          <button
            type="submit"
            className="btn btn-light"
            style={{
              padding: "15px 185px",
              marginTop: "15px",
              borderRadius: "100px",
            }}
          >
            <strong>Log In</strong>
          </button>
        </form>
      </div>
      <div
        className="container d-flex justify-content-center"
        style={{ marginTop: "-25px", color: "black", fontSize: "20px" }}
      >
        <p>New to Rent-Tech?</p>
        <Link
          to="/signup"
          className="mx-2"
          style={{ textDecoration: "none", color: "black" }}
        >
          <strong>Join Now</strong>
        </Link>
      </div>
    </>
  );
};

export default Login;

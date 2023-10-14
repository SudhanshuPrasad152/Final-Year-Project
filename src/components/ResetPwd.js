import React, { useState } from "react";
import backimg from "../images/backimg.png";
import { useNavigate, useParams } from "react-router-dom";
const ResetPwd = () => {
  let navigate = useNavigate();
  const [pwd, setPwd] = useState({ password: "", cpassword: "" });
  document.body.style.backgroundImage = `url(${backimg})`;
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundRepeat = "no-repeat";
  const { id, authToken } = useParams();
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
    setPwd({ ...pwd, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pwd.password !== pwd.cpassword) {
      alert("Password doesn't match");
      return;
    }
    const response = await fetch(
      `http://localhost:5000/api/auth/reset-password/${id}/${authToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: pwd.password,
        }),
      }
    );

    const json = await response.json();
    if (json.Status === "Success") {
      navigate("/login");
    } else {
      alert("Please try again later");
    }
  };
  return (
    <>
      <div className="container d-flex justify-content-center my-4">
        <form className="cred border border-white" onSubmit={handleSubmit}>
          <h2 className="my-3">Reset Password</h2>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              New Password
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
            <strong>Update</strong>
          </button>
        </form>
      </div>
    </>
  );
};

export default ResetPwd;

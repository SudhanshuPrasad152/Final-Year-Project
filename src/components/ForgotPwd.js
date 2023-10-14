import React, { useState } from "react";
import backimg from "../images/backimg.png";
const ForgotPwd = () => {
  const [email, setEmail] = useState("");
  document.body.style.backgroundImage = `url(${backimg})`;
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundRepeat = "no-repeat";

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email
        })
    })

    const json = await response.json();
    if(json.success){
        alert("Reset Link is sent to your email");
    }
    else{
        alert("Please Enter valid credentials");
    }
    setEmail("");
  }

  return (
    <div className="container my-5 d-flex justify-content-center ">
      <form className="cred border border-white" onSubmit={handleSubmit}>
        <div className="mb-3">
          <h2 className="my-3">Forgot Password</h2>
          <label htmlFor="email" className="form-label">
            Enter your E-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <button
          type="submit"
          className="btn btn-light"
          style={{
            padding: "12px 185px",
            marginTop: "15px",
            borderRadius: "100px",
          }}
        >
          <strong>Submit</strong>
        </button>
      </form>
    </div>
  );
};

export default ForgotPwd;

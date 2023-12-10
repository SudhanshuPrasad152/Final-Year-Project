import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RentHome = () => {
  document.body.style.backgroundImage = "none";
  const [img, setImg] = useState("");
  const [details, setDetails] = useState({
    name: "",
    age: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    contact: "",
    productType: "",
    productSpecification: "",
    productDescription: "",
  });
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/rent-item");
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    navigate("/login");
  };
  const handleOnClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    navigate("/");
  };

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    // console.log(details)
  };

  const handleImageChange = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      // console.log(reader.result); base64 encoded string
      setImg(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error", error);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (details.state.value === "Select one--") {
      alert("Enter a valid State");
    }
    if (details.productType.value === "Select one--") {
      alert("Enter a valid product type");
    }
    const response = await fetch(
      "http://localhost:5000/api/rent/renter-details",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          name: details.name,
          age: details.age,
          address: details.address,
          city: details.city,
          state: details.state,
          pincode: details.pincode,
          contact: details.contact,
          productType: details.productType,
          productSpecification: details.productSpecification,
          productDescription: details.productDescription,
          productImage: img,
        }),
      }
    );
    const json = await response.json();
    if (json.success) {
      alert("Your product is successfully listed!");
    } else {
      alert("Try again later");
    }
    setDetails({
      name: "",
      age: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      contact: "",
      productType: "",
      productSpecification: "",
      productDescription: "",
    });
    setImg("");
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <div
            className="navbar-brand"
            onClick={handleOnClick}
            style={{ cursor: "pointer" }}
          >
            <img
              src={require("../images/Website Logo.jpg")}
              alt=""
              className="logo"
            />
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div
                  onClick={handleOnClick}
                  className="nav-link "
                  aria-current="page"
                  style={{ color: "#E6E6FA", cursor: "pointer" }}
                >
                  Home
                </div>
              </li>
            </ul>
          </div>
          <button className="btn btn-light" onClick={handleClick}>
            LogOut
          </button>
        </div>
      </nav>
      <h2 className="rentHead">
        Fill out this form to get your product listed on our website
      </h2>
      <div className="container my-3" style={{ width: "700px" }}>
        <form onSubmit={handleSubmit}>
          <div className="rent">
            <div className="mb-3 d-flex align-items-center">
              <label
                htmlFor="name"
                className="form-label mx-4 required"
                style={{ width: "200px" }}
              >
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={handleChange}
                value={details.name}
                required
              />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label
                htmlFor="email"
                className="form-label mx-4"
                style={{ width: "200px" }}
              >
                Email Address:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={localStorage.getItem("email")}
                disabled
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label
                htmlFor="age"
                className="form-label mx-4 required"
                style={{ width: "200px" }}
              >
                Age:
              </label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                min={18}
                max={100}
                onChange={handleChange}
                value={details.age}
                required
              />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label
                htmlFor="address"
                className="form-label mx-4 required"
                style={{ width: "200px" }}
              >
                Address:
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                onChange={handleChange}
                value={details.address}
                required
              />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label
                htmlFor="city"
                className="form-label mx-4 required"
                style={{ width: "200px" }}
              >
                City:
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                onChange={handleChange}
                value={details.city}
                required
              />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label
                htmlFor="role"
                className="form-label mx-4 required"
                style={{ width: "200px" }}
              >
                State:
              </label>
              <select
                className="form-select"
                name="state"
                aria-label="Default select example"
                value={details.state}
                onChange={handleChange}
                required
              >
                <option value="DEFAULT">Select one--</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">
                  Dadar and Nagar Haveli
                </option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label
                htmlFor="pincode"
                className="form-label mx-4 required"
                style={{ width: "200px" }}
              >
                Pincode:
              </label>
              <input
                type="number"
                className="form-control"
                id="pincode"
                name="pincode"
                onChange={handleChange}
                value={details.pincode}
                required
              />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label
                htmlFor="contact"
                className="form-label mx-4 required"
                style={{ width: "200px" }}
              >
                Contact No:
              </label>
              <input
                type="number"
                className="form-control"
                id="contact"
                name="contact"
                onChange={handleChange}
                value={details.contact}
                required
              />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label
                htmlFor="productType"
                className="form-label mx-4 required"
                style={{ width: "200px" }}
              >
                Product Type:
              </label>
              <select
                className="form-select"
                name="productType"
                aria-label="Default select example"
                onChange={handleChange}
                value={details.productType}
                required
              >
                <option value="DEFAULT">Select one--</option>
                <option value="Mobile">Mobile</option>
                <option value="Laptop">Laptop</option>
                <option value="Smart Device">Smart Device</option>
                <option value="Headphone">Headphone</option>
              </select>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label
                htmlFor="productSpecification"
                className="form-label mx-4 required"
                style={{ width: "200px" }}
              >
                Product Specification:
              </label>
              <input
                type="text"
                className="form-control"
                id="productSpecification"
                name="productSpecification"
                onChange={handleChange}
                value={details.productSpecification}
                required
              />
            </div>
            <div className="mb-3 d-flex flex-column">
              <label
                htmlFor="productDescription"
                className="form-label mx-4 required"
              >
                Product Description(How much old, Current condition):
              </label>
              <textarea
                name="productDescription"
                id="productDescription"
                cols="20"
                rows="5"
                style={{ marginLeft: "26px" }}
                onChange={handleChange}
                value={details.productDescription}
                required
              ></textarea>
            </div>
            <div className="mb-3 d-flex">
              <label
                htmlFor="productImage"
                className="form-label mx-4 required"
                style={{ width: "200px" }}
              >
                Product Image:
              </label>
              <div className="d-flex flex-column" style={{ gap: "20px" }}>
                <input
                  type="file"
                  accept="image/jpeg, image/png, image/jpg"
                  id="productImage"
                  name="productImage"
                  onChange={handleImageChange}
                  required
                />
                {img ? (
                  <img src={img} alt="" width="200px" height="200px" />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-4"
            style={{ marginLeft: "281px" }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default RentHome;

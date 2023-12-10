import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductPage = () => {
  const { item } = useParams();
  const [data, setData] = useState("");
  const getData = async () => {
    const response = await fetch(`http://localhost:5000/api/product/item`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key: item,
      }),
    });
    const parsedData = await response.json();
    setData(parsedData);
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="container d-flex justify-content-between my-4">
        <div
          style={{ width: "400px", height: "700px" }}
          className="d-flex flex-column"
        >
          <img
            src={data.productImage}
            alt=""
            style={{ width: "400px", height: "500px", borderRadius: "10px" }}
          />
          <Link
            to={`/product-list/${data.productType}/${data._id}/payment`}
            className="btn btn-primary justify-content align-items-center my-4"
            style={{
              padding: "15px",
              borderRadius: "20px",
              fontWeight: "bold",
            }}
          >
            Take on Rent
          </Link>
        </div>
        <div style={{ width: "750px", height: "700px" }}>
          <p style={{ fontSize: "25px" }}>
            <strong>{data.productSpecification}</strong>
          </p>
          <p style={{ marginBottom: "0px", fontWeight: "bold" }}>
            Product Description:
          </p>
          <p style={{ marginTop: "0px" }}>{data.productDescription}</p>
          <br />
          <p style={{ fontWeight: "bold" }}>Renter Details:</p>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{data.name}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{data.address}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>{data.city}</td>
              </tr>
              <tr>
                <td>State</td>
                <td>{data.state}</td>
              </tr>
              <tr>
                <td>Pincode</td>
                <td>{data.pincode}</td>
              </tr>
              <tr>
                <td>Contact No</td>
                <td>{data.contact}</td>
              </tr>
            </tbody>
          </table>
          <br />
          <p style={{ fontWeight: "bold" }}>Pricing Details</p>
          <table>
            <tbody>
              <tr>
                <th>Rent-Tenure</th>
                <th>Price</th>
              </tr>
              <tr>
                <td>0-15 Days</td>
                <td>₹75/Day</td>
              </tr>
              <tr>
                <td>1 Month</td>
                <td>₹60/Day</td>
              </tr>
              <tr>
                <td>3 Months</td>
                <td>₹50/Day</td>
              </tr>
              <tr>
                <td>6 Months</td>
                <td>₹40/Day</td>
              </tr>
              <tr>
                <td>12 Months</td>
                <td>₹25/Day</td>
              </tr>
            </tbody>
          </table>
          <br />
          <strong style={{ display: "inline" }}>Note: </strong>
          <p style={{ display: "inline" }}>
            There will be a security Deposit of Mininum Rs. 3000 which you have
            to pay to the renter by contacting him and he/she will tell how to
            pay to prove that you are a genuine customer. Security Deposit can
            vary from product to product and renter to renter. It will be
            refunded to you when you will return the product back to the renter.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductPage;

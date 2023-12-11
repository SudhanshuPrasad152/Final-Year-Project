import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PaymentPage = () => {
  const { text, item } = useParams();
  let navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate(`/product-list/${text}/${item}/payment`);
      setName(localStorage.getItem("name"));
      setEmail(localStorage.getItem("email"));
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let [amount, setAmount] = useState(0);
  const handleClick = (e) => {
    if (e.target.id === "flexRadioDefault1") {
      setAmount(1125);
    } else if (e.target.id === "flexRadioDefault2") {
      setAmount(1800);
    } else if (e.target.id === "flexRadioDefault3") {
      setAmount(4500);
    } else if (e.target.id === "flexRadioDefault4") {
      setAmount(7200);
    } else {
      setAmount(9125);
    }
  };

  const displayRazorpay = async () => {
    const res = await loadRazorpay(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK faild to load, Are you online?");
      return;
    }

    const data = await fetch("http://localhost:5000/api/payment/razorpay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
      }),
    }).then((t) => t.json());
    const options = {
      key: "rzp_test_KFtBsWJaNgLbW2",
      amount: data.amount,
      currency: data.currency,
      name: "Rent-Tech",
      description: "Test Transaction",
      image: "https://i.postimg.cc/0ySvtgvM/logo-3.jpg",
      order_id: data.id,
      callback_url: "http://localhost:5000/api/payment/verification",
      prefill: {
        name: name,
        email: email,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const loadRazorpay = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center my-3 payment">
      <p style={{ fontWeight: "bold" }}>
        Choose Your Rent Tenure according to your preference
      </p>
      <form className="d-flex justify-content-evenly flex-column">
        <div className="my-2 form-check">
          <input
            type="radio"
            id="flexRadioDefault1"
            name="flexRadioDefault"
            className="form-check-input"
            onClick={handleClick}
          />
          <label
            htmlFor="flexRadioDefault1"
            style={{ marginLeft: "5px" }}
            className="form-check-label"
          >
            0-15 Days
          </label>
        </div>
        <div className="my-2 form-check">
          <input
            type="radio"
            id="flexRadioDefault2"
            name="flexRadioDefault"
            className="form-check-input"
            onClick={handleClick}
          />
          <label
            htmlFor="flexRadioDefault2"
            style={{ marginLeft: "5px" }}
            className="form-check-label"
          >
            1 Month
          </label>
        </div>
        <div className="my-2 form-check">
          <input
            type="radio"
            id="flexRadioDefault3"
            name="flexRadioDefault"
            className="form-check-input"
            onClick={handleClick}
          />
          <label
            htmlFor="flexRadioDefault3"
            style={{ marginLeft: "5px" }}
            className="form-check-label"
          >
            3 Months
          </label>
        </div>
        <div className="my-2 form-check">
          <input
            type="radio"
            id="flexRadioDefault4"
            name="flexRadioDefault"
            className="form-check-input"
            onClick={handleClick}
          />
          <label
            htmlFor="flexRadioDefault4"
            style={{ marginLeft: "5px" }}
            className="form-check-label"
          >
            6 Months
          </label>
        </div>
        <div className="my-2 form-check">
          <input
            type="radio"
            id="flexRadioDefault5"
            name="flexRadioDefault"
            className="form-check-input"
            onClick={handleClick}
          />
          <label
            htmlFor="flexRadioDefault5"
            style={{ marginLeft: "5px" }}
            className="form-check-label"
          >
            12 Months
          </label>
        </div>
      </form>
      <p style={{ fontWeight: "bold" }}>Your final amount to pay is {amount}</p>
      <button
        className="btn btn-success"
        style={{ borderRadius: "20px", padding: "10px 20px 10px 20px" }}
        onClick={() => displayRazorpay()}
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;

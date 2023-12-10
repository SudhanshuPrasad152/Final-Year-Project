import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PaymentPage = () => {
    const {text, item} = useParams();
    let navigate = useNavigate();
    useEffect(() => {
      if (localStorage.getItem("token")) {
        navigate(`/product-list/${text}/${item}/payment`);
      } else {
        navigate("/login");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let [amount, setAmount] = useState(0);
    const handleClick = (e) => {
        if(e.target.id === "flexRadioDefault1"){
            setAmount(1125);
        }
        else if(e.target.id === "flexRadioDefault2"){
            setAmount(1800);
        }
        else if(e.target.id === "flexRadioDefault3"){
            setAmount(4500);
        }
        else if(e.target.id === "flexRadioDefault4"){
            setAmount(7200);
        }
        else {
            setAmount(9125);
        }
    }

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center my-3 payment">
      <p style={{fontWeight: "bold"}}>Choose Your Rent Tenure according to your preference</p>
      <form className="d-flex justify-content-evenly flex-column">
      <div className="my-2 form-check">
          <input type="radio" id="flexRadioDefault1" name="flexRadioDefault" className="form-check-input" onClick={handleClick}/>
          <label htmlFor="flexRadioDefault1" style={{ marginLeft: "5px" }} className="form-check-label">
            0-15 Days
          </label>
        </div>
        <div className="my-2 form-check">
          <input type="radio" id="flexRadioDefault2" name="flexRadioDefault" className="form-check-input" onClick={handleClick}/>
          <label htmlFor="flexRadioDefault2" style={{ marginLeft: "5px" }} className="form-check-label">
            1 Month
          </label>
        </div>
        <div className="my-2 form-check">
          <input type="radio" id="flexRadioDefault3" name="flexRadioDefault" className="form-check-input" onClick={handleClick}/>
          <label htmlFor="flexRadioDefault3" style={{ marginLeft: "5px" }} className="form-check-label">
            3 Months
          </label>
        </div>
        <div className="my-2 form-check">
          <input type="radio" id="flexRadioDefault4" name="flexRadioDefault" className="form-check-input" onClick={handleClick}/>
          <label htmlFor="flexRadioDefault4" style={{ marginLeft: "5px" }} className="form-check-label">
            6 Months
          </label>
        </div>
        <div className="my-2 form-check">
          <input type="radio" id="flexRadioDefault5" name="flexRadioDefault" className="form-check-input" onClick={handleClick}/>
          <label htmlFor="flexRadioDefault5" style={{ marginLeft: "5px" }} className="form-check-label">
            12 Months
          </label>
        </div>
      </form>
      <p style={{fontWeight: "bold"}}>Your final amount to pay is {amount}</p>
      <button className="btn btn-success" style={{borderRadius: "20px", padding: "10px 20px 10px 20px"}}>Pay Now</button>
    </div>
  );
};

export default PaymentPage;

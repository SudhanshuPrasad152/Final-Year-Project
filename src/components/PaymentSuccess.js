import React from "react";
import { useSearchParams } from "react-router-dom";
const PaymentSuccess = () => {
  const seachQuery = useSearchParams()[0];

  const referenceNum = seachQuery.get("reference");
  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <p style={{ fontSize: "50px", fontWeight: "bold", marginBottom: "0px" }}>
        Order Successful
      </p>
      <strong style={{ marginBottom: "0px" }} className="my-2">
        Reference Number: {referenceNum}
      </strong>
    </div>
  );
};

export default PaymentSuccess;

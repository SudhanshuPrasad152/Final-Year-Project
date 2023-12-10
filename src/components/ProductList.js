import React from "react";

const ProductList = (props) => {
  return (
    <div>
      <div className="card mx-3 my-3" style={{cursor: "pointer"}}>
        <img src={props.imageUrl} className="card-img-top photo" alt="..." />
        <div className="card-body" style={{height: "150px"}}>
          <p className="card-text" style={{marginBottom: "15px"}}>
            <strong>{props.spec}...</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

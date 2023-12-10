import React from "react";
import { Link } from "react-router-dom";

const Section = (props) => {
  return (
    <div className="flexsection my-4">
      <Link
        style={{ textDecoration: "none", textAlign: "center", color: "black" }}
        to={`/product-list/${props.text}`}
      >
        <img
          src={require(`../images/${props.img}.jpg`)}
          className="card-img-top"
          alt="..."
          style={{ width: "200px", height: "150px", margin: "10px" }}
        />
        <p>{props.text}</p>
      </Link>
    </div>
  );
};

export default Section;

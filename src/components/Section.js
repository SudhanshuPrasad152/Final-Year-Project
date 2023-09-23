import React from "react";

const Section = (props) => {
  console.log();
  return (
    <div className="flexsection my-4">
      <img
        src={require(`../images/${props.img}.jpg`)}
        className="card-img-top "
        alt="..."
        style={{ width: "200px", height: "150px", margin: "10px" }}
      />
      <p>{props.text}</p>
    </div>
  );
};

export default Section;

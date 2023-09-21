import React from "react";


const Section = (props) => {
  console.log()
  return (
    <div className="flexsection my-4">
      <img
        src={require(`../images/${props.img}.png`)}
        className="card-img-top "
        alt="..."
      />
      <p>{props.text}</p>
    </div>
  );
};

export default Section;

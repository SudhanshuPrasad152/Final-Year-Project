import React from "react";
import Section from "./Section";
import Carousel from "./Carousel";
import Footer from "./Footer";

const Home = () => {
  document.body.style.background = "white";
  return (
    <>
      <Carousel />
      <div className="section container ">
        <Section img={"smartphone"} text={"Smart Phones"} />
        <Section img={"laptop"} text={"Laptops"} />
        <Section img={"smart-device"} text={"Smart Devices"} />
        <Section img={"headphone"} text={"Headphones"} />
      </div>
      <Footer />
    </>
  );
};

export default Home;

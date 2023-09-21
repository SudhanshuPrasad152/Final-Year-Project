import React from "react";
import Section from "./Section";
import Carousel from "./Carousel";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Carousel/>
      <div className="section container">
        <Section img={'smartphone'} text={'Smart Phones'}/>
        <Section img={'notebook-computer'} text={'Laptops'} />
        <Section img={'home-assistant'} text={'Smart Devices'}/>
        <Section img={'headphone-symbol'} text={'HeadPhones'} />
      </div>
      <Footer/>
    </>
  );
};

export default Home;

import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <h2 className="">About Us - Rent-Tech</h2>
      <p>
        Welcome to Rent-Tech, your premier destination for renting and
        discovering a world of technology at your fingertips! We're here to
        revolutionize the way you access and utilize the latest gadgets and
        electronics.
      </p>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Unlock Possibilities</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Whether you're a gadget enthusiast, a traveler in need of
              temporary tech, or someone looking to earn extra income from your
              unused devices, Renthings is your go-to platform. We make it
              effortless for you to access a wide range of cutting-edge
              technology without breaking the bank.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Sustainability</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              We're committed to reducing electronic waste by extending the
              lifespan of tech devices. By renting instead of buying, you
              contribute to a more sustainable future.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong> Choice and Flexibility</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Renthings provides you with the flexibility to choose from a
              diverse selection of devices, catering to your specific needs.
              Need a high-end laptop for a weekend project? A top-notch
              smartphone for your next trip? We've got you covered.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <strong> Affordability </strong>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Say goodbye to the steep upfront costs of purchasing new gadgets.
              With Renthings, you can enjoy the latest tech at a fraction of the
              price. Our hourly rental model ensures you only pay for what you
              use.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

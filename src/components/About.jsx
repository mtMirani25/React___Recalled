import React, { useState } from "react";

const About = () => {
  const [bgStyle, setBgStyle] = useState({
    backgroundColor: "#fff",
    color: "#000",
  });

  const bgChangeHandler = () => {
    if (bgStyle.color === "#fff") {
      setBgStyle({
        backgroundColor: "#fff",
        color: "#000",
      });
    } else {
      setBgStyle({
        backgroundColor: "#fff",
        color: "#000",
      });
    }
  };
  return (
    <>
      <div className="container" style={bgStyle}>
        <h2 className="text-center my-4 text-primary">About Us</h2>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                style={bgStyle}
              >
                Functionalities
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={bgStyle}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, ullam. Velit, harum. Deserunt id possimus, qui,
                quaerat laudantium debitis nostrum, veritatis doloribus hic
                praesentium quam? Optio excepturi placeat et corrupti!
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
                style={bgStyle}
              >
                Accessibilties
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={bgStyle}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, ullam. Velit, harum. Deserunt id possimus, qui,
                quaerat laudantium debitis nostrum, veritatis doloribus hic
                praesentium quam? Optio excepturi placeat et corrupti!
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
                style={bgStyle}
              >
                Rules
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={bgStyle}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, ullam. Velit, harum. Deserunt id possimus, qui,
                quaerat laudantium debitis nostrum, veritatis doloribus hic
                praesentium quam? Optio excepturi placeat et corrupti! Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Fuga minima
                culpa voluptate temporibus odio, nemo nesciunt modi quis
                deserunt illo?
              </div>
            </div>
          </div>
        </div>

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="toggle__btn"
            style={{ cursor: "pointer" }}
            onClick={bgChangeHandler}
          />
        </div>
      </div>
    </>
  );
};

export default About;

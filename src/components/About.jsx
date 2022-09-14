import React from "react";

const About = (props) => {
  const changeStyle = {
    backgroundColor: props.toggleMode === "dark" ? "#222222" : "#fff",
    color: props.toggleMode === "dark" ? "#fff" : "#222222",
  };
  return (
    <>
      <div className="container">
        <h2 className="text-center my-4 text-primary">About Us</h2>
        <div
          className="accordion accordion-flush"
          id="accordionFlushExample"
          style={{
            border:
              props.toggleMode === "dark" ? "1px solid #fff" : "1px solid #000",
          }}
        >
          <div className="accordion-item" style={changeStyle}>
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                style={changeStyle}
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
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, ullam. Velit, harum. Deserunt id possimus, qui,
                quaerat laudantium debitis nostrum, veritatis doloribus hic
                praesentium quam? Optio excepturi placeat et corrupti!
              </div>
            </div>
          </div>
          <div className="accordion-item" style={changeStyle}>
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
                style={changeStyle}
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
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, ullam. Velit, harum. Deserunt id possimus, qui,
                quaerat laudantium debitis nostrum, veritatis doloribus hic
                praesentium quam? Optio excepturi placeat et corrupti!
              </div>
            </div>
          </div>
          <div className="accordion-item" style={changeStyle}>
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
                style={changeStyle}
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
              <div className="accordion-body">
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
      </div>
    </>
  );
};

export default About;

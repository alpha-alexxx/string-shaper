import React from "react";
import { Link } from "react-router-dom";


export default function About(props) {
  
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#252525",
    backgroundColor: props.mode === "dark" ? "#252525" : "#fefefe"
  }
 
  
  return (
    <>
      <div className="container">
        <h1 className="my-3">About Us:</h1>
        <hr />
        <div className="container col-xxl-8 px-4 py-5" style={myStyle}>
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-themes.png"
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <p className="badge text-bg-primary my-2 mx-2">Ankit Kumar - Student/Web Developer</p>
              <p className="badge text-bg-secondary my-2">First Project</p>
              <h1 className="display-5 lh-1 mb-3 fw-bold">
                Text Utilities:
              </h1>
              <p className="lead">
                Simple Text Utility are a set of functions or methods that are used to manipulate text in various ways, such as converting text to uppercase, lowercase, titlecase, etc. These utilities are commonly used in web development to format text for display on a website or in an application.
                <span className="badge text-bg-info">This project is part of his learning process.</span>
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Link
                  to="/"
                  type="button"
                  className={`btn  btn-${props.mode==="light"?"primary":"outline-primary"} btn-lg px-4 me-md-2`}
                >
                  Tools
                </Link>
                <Link
                  type="button"
                  to="/Contact"
                  className={`btn btn-${props.mode==="light"?"dark":"outline-light"} btn-lg px-4 me-md-2`}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container accordion-container">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style={myStyle}
                >
                  <strong className="fw-bold">
                    Text Manipulation Tools
                  </strong>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={myStyle}>
               <strong>Get your text manipulation needs sorted in a jiffy with Simple Text Utility!</strong> With our powerful tool, you can easily convert text to uppercase, lowercase, and titlecase, remove special characters, count words, and get the fast, slow, and average reading time. Plus, you can copy the text to clipboard with a single click to share it with others. Get your writing & editing done faster & easier - try Simple Text Utility today!
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={myStyle}
                >
                  <strong className="fw-bold">
                    Cross-Device Compatibility
                  </strong>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={myStyle}>
                  <strong>This project is designed to work </strong>
                  seamlessly across all devices, including desktops, laptops, tablets, and smartphones. This ensures that your text formatting will look great no matter where it is viewed. <strong>This Project is made on Bootstrap framework.</strong>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={myStyle}
                >
                  <strong className="fw-bold">
                    Built on Bootstrap
                  </strong>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={myStyle}>
                  <strong>This project is built on Bootstrap</strong>, a popular front-end framework that makes it easy to create responsive designs. This ensures that your text formatting will look great on any device, regardless of screen size or resolution. The project also includes a variety of pre-designed UI components, such as buttons, forms, and navigation menus, all built using Bootstrap. This makes it easy to add professional-looking elements to your text formatting projects.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

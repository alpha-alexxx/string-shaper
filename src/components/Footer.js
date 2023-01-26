import React from "react";
import { Link } from "react-router-dom";
export default function Footer(props) {

  let textcolor = `text-${props.mode === "light" ? "black" : "white"}`
  return (
    <footer className={`d-flex flex-wrap justify-content-between align-items-center py-3 border-top bg-${props.mode}  `}>
      <div className={`col-md-4 d-flex align-items-center ${textcolor}`}>
        <Link
          to="/"
          className="mb-3 me-2 mb-md-0 text-decoration-none lh-1 mx-3"
        >
        <span className={`mb-3 mb-md-0 fw-bold ${textcolor}`}>{props.title} &#169; {new Date().getFullYear()}</span>

        </Link>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex mx-3">
        <li className="ms-3">
          <a className={textcolor} href="https://twitter.com/aries_the_ankit">
            <i className="bi bi-twitter"></i>
          </a>
        </li>
        <li className="ms-3">
          <a className={textcolor} href="https://www.instagram.com/_._ankitkr_._">
            <i className="bi bi-instagram"></i>
          </a>
        </li>
        <li className="ms-3">
          <a className={textcolor} href="https://www.facebook.com/the.aries.ankit/">
            <i className="bi bi-facebook"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

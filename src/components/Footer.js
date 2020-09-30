import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/WhiteTrans.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-lists">
          <ul className="footer-col">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/conferences">Conferences</Link>
            </li>
            <li>
              <Link to="/constitution">Constitution</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdgx1Gi71VOqhUStqZj6QVZIoYyz816i_KMhSoVMiGb8PGopw/viewform?usp=sf_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-details">
          <Link to="/">
            <img className="footer-logo" src={logo} alt="logo" />
          </Link>
          <p className="author-link">
            Website by <a href="https://franwebdev.uk/">Francis Whitehead</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
              <Link to="/articles">News</Link>
            </li>
            <li>
              <Link to="/category/events">Events</Link>
            </li>
            <li>
              <Link to={"/category/resources"}>Resources</Link>
            </li>
            <li>
              <Link to={"/category/guidance"}>Guidance</Link>
            </li>
            <li>
              <Link to="/category/consultations">Consultations</Link>
            </li>
            <li>
              <Link Link to={"/category/minutes"}>
                Minutes
              </Link>
            </li>
            <li>
              <Link to="/constitution">Constitution</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
        <div className="footer-details">
          <p>
            Website by <a href="https://franwebdev.uk/">Francis Whitehead</a>
          </p>
          <Link to="/">
            <img className="footer-logo" src={logo} alt="logo" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

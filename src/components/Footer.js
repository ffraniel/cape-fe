import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
import logo from '../assets/GreenTrans.png';
const Footer = () => {

  return (
    <footer className="footer">
      <div >
        <ul className="footer-col">
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      </div>
      <div className="footer-details">
        <p>Website by <a href="www.franthedev.uk">Francis Whitehead</a></p>
        <Link to="/" >
          <img className="footer-logo" src={logo} alt="logo" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
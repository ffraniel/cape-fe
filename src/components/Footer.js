import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
import logo from '../assets/GreenTrans.png';
const Footer = () => {

  const toTopOfPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
          <div className="footer-lists">
            <ul className="footer-col">
              <li>
                <Link onClick={toTopOfPage} to="/" >Home</Link>
              </li>
              <li>
                <Link onClick={toTopOfPage} to="/about">About</Link>
              </li>
              <li>
                <Link onClick={toTopOfPage} to="/conferences">Conferences</Link>
              </li>
              <li>
                <Link onClick={toTopOfPage} to="/constitution">Constitution</Link>
              </li>
              <li>
                <Link onClick={toTopOfPage} to="/login">Log In</Link>
              </li>
            </ul>
          </div>
        <div className="footer-details">
          <p>Website by <a href="https://franwebdev.uk/">Francis Whitehead</a></p>
          <Link onClick={toTopOfPage} to="/" >
            <img className="footer-logo" src={logo} alt="logo" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
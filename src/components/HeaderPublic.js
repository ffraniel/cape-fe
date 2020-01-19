import React from "react";
import "./HeaderPublic.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/WhiteTrans.png";

const HeaderPublic = () => {
  return (
    <section className="header">
      <nav>
        <NavLink className="logo" to="/">
          <img
            className="logo-img"
            src={Logo}
            alt="CAPE logo - child figure holding two adult hands"
          />
        </NavLink>
        <ul className="desktop-menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">What We Do</NavLink>
          </li>
          <li>
            <NavLink to="/conferences">Conferences</NavLink>
          </li>
          <li>
            <NavLink to="/constitution">Constitution</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
        </ul>
        <NavLink to="/navigation" className="menu-btn">
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </NavLink>
      </nav>
    </section>
  );
};

export default HeaderPublic;

import React from "react";
import "./HeaderPublic.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo1.svg";

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
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/join">Join</NavLink>
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
      </nav>
    </section>
  );
};

export default HeaderPublic;

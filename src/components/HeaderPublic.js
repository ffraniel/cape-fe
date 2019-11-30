import React from "react";
import "./HeaderPublic.css";
import { Link } from "react-router-dom";

const HeaderPublic = () => {
  return (
    <section>
      <h1>Cape - Header Public</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/join">Join</Link>
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
        </ul>
      </nav>
    </section>
  );
};

export default HeaderPublic;

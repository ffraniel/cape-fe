import React from "react";
import "./PublicMobNav.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";


const PublicMobNav = () => {

  let history = useHistory();

  return (
    <nav className="mob-nav">
      <ul>
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
        <li>
          <button onClick={()=>{history.goBack()}}>x</button>
        </li>
      </ul>
    </nav>

  );
};

export default PublicMobNav;
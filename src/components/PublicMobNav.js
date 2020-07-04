import React from "react";
import "./PublicMobNav.css";
import { NavLink } from "react-router-dom";

const PublicMobNav = ({ isMobNavOpen, setIsMobNavOpen }) => {
  const closeNav = () => {
    setIsMobNavOpen(false);
  };

  return (
    <nav className={isMobNavOpen ? "mob-nav open" : "mob-nav"}>
      <ul className="mobile-menu">
        <li>
          <NavLink onClick={closeNav} exact={true} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeNav} to="/about">
            What We Do
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeNav} to="/conferences">
            Conferences
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeNav} to="/constitution">
            Constitution
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeNav} to="/login">
            Log In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PublicMobNav;

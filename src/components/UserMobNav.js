import React from "react";
import "./PublicMobNav.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import fire from "../config/fire";

const UserMobNav = ({ isMobNavOpen, setIsMobNavOpen }) => {
  let history = useHistory();

  const closeNav = () => {
    setIsMobNavOpen(false);
  };

  const signOut = () => {
    closeNav();
    fire
      .auth()
      .signOut()
      .then(function () {
        console.log("sign-out successful.");
        history.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <nav className={isMobNavOpen ? "mob-nav open" : "mob-nav"}>
      <ul>
        <li>
          <NavLink onClick={closeNav} exact to="/">
            News Feed
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeNav} to="/category/events">
            Events
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeNav} to={"/category/resources"}>
            Resources
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeNav} to={"/category/guidance"}>
            Guidance
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeNav} to={"/category/consultations"}>
            Consultations
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeNav} to={"/category/minutes"}>
            Minutes
          </NavLink>
        </li>
        <li>
          <a
            onClick={closeNav}
            href="https://cape.flarum.cloud/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Forum
          </a>
        </li>
        <li>
          <NavLink onClick={closeNav} className="" to="/constitution">
            Constitution
          </NavLink>
        </li>
        <li>
          <NavLink className="" onClick={closeNav} to="/profile">
            Profile
          </NavLink>
        </li>

        <li>
          <button className="btn sign-out-btn" onClick={signOut}>
            SIGN OUT
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default UserMobNav;

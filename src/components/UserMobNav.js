import React from "react";
import "./PublicMobNav.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import fire from "../config/fire";
import fire from "../config/fire";
import { getAuth, signOut } from "firebase/auth";

const UserMobNav = ({ isMobNavOpen, setIsMobNavOpen }) => {

  const auth = getAuth(fire);

  let history = useHistory();

  const closeNav = () => {
    setIsMobNavOpen(false);
  };

  const signOutUser = () => {
    closeNav();
    signOut(auth)
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
          <NavLink onClick={closeNav} to={"/category/CYPMHC"}>
            CYPMHC
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeNav} to={"/archive"}>
            KCSIE Archive
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
          <NavLink onClick={closeNav} to="/constitution">
            Constitution
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeNav} to={"/favourites"}>
            Favourites
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeNav} className="" to="/profile">
            Profile
          </NavLink>
        </li>

        <li>
          <button className="btn sign-out-btn" onClick={signOutUser}>
            SIGN OUT
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default UserMobNav;

import React from "react";
import "./PublicMobNav.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import fire from "../config/fire";


const UserMobNav = () => {

  let history = useHistory();
  const signOut = () => {
    fire
      .auth()
      .signOut()
      .then(function() {
        console.log("sign-out successful.");
        history.push('/');
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <nav className="mob-nav">
      <ul>
        <li>
          <NavLink to="/">News Feed</NavLink>
        </li>
        <li>
          <NavLink to="/category/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/constitution">Constitution</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <button className="btn sign-out-btn" onClick={signOut}>SIGN OUT</button>
        </li>
        <li>
          <button onClick={()=>{history.goBack()}}>x</button>
        </li>
      </ul>
    </nav>

  );
};

export default UserMobNav;
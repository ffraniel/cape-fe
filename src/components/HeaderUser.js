import React from 'react';
import { NavLink, useHistory } from "react-router-dom";
import './HeaderUser.css';
import Logo from "../assets/WhiteTrans.png";
import fire from "../config/fire";

const HeaderUser = () => {

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
        </ul>
        <NavLink to="/navigation" className="menu-btn">
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </NavLink>
      </nav>
    </section>
  )
}

export default HeaderUser;
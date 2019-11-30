import React from 'react';
import { Link } from "react-router-dom";
import './HeaderUser.css';
import fire from "../config/fire";

const HeaderUser = () => {

  const signOut = () => {
    fire
      .auth()
      .signOut()
      .then(function() {
        console.log("sign-out successful.");
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <section>
      <h1>Cape - Header User</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">News Feed</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/constitution">Constitution</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <button onClick={signOut}>SIGN OUT</button>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default HeaderUser;
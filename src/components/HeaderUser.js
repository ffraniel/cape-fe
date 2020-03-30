import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import './HeaderUser.css';
import Logo from "../assets/WhiteTrans.png";
import fire from "../config/fire";
import UserMobNav from './UserMobNav';
import { debounce } from '../utility/debounce';

const HeaderUser = () => {

  const [isMobNavOpen, setIsMobNavOpen] = useState(false);

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setIsMobNavOpen(prevState => !prevState);
  }

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


  const [ colourHeader, setColourHeader ] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    };
  });

  const scrollHandler = (e) => {
    triggerFunction(e);
  };

  const triggerFunction = debounce(function (e) {

    // var jumbotron = document.querySelector(".jumbotron");
    var headerTrigger = document.querySelector(".header-trigger");
    var headerElem = document.querySelector('.header');

    if (headerTrigger) {
      var headerHeight = headerElem.getBoundingClientRect().height;
      var bottomJumbotron = headerTrigger.getBoundingClientRect().top;
  
      if (window.scrollY > ((bottomJumbotron + headerTrigger.offsetHeight) - headerHeight)) {
        if (!colourHeader) {
          setColourHeader(true);
        }
      } else {
        if (colourHeader) {
          setColourHeader(false);
        }
      }
    }
  }, 100);

  return (
    <section className={colourHeader ? 'header headerBackgroundColour' : 'header'}>
      <UserMobNav isMobNavOpen={isMobNavOpen} setIsMobNavOpen={setIsMobNavOpen} />
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
        <button onClick={handleMenuClick} className="menu-btn">
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </button>
      </nav>
    </section>
  )
}

export default HeaderUser;
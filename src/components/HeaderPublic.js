import React, { useEffect, useState } from "react";
import "./HeaderPublic.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/WhiteTrans.png";
import { debounce } from '../utility/debounce';
import PublicMobNav from './PublicMobNav';

const HeaderPublic = () => {

  const [isMobNavOpen, setIsMobNavOpen] = useState(false);

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setIsMobNavOpen(prevState => !prevState);
  }

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

    var jumbotron = document.querySelector(".jumbotron");
    var headerElem = document.querySelector('.header');

    if (jumbotron) {
      var headerHeight = headerElem.getBoundingClientRect().height;
      var bottomJumbotron = jumbotron.getBoundingClientRect().bottom;
  
      if (window.scrollY > ((bottomJumbotron + jumbotron.offsetHeight) - headerHeight)) {
        if (!colourHeader) {
          setColourHeader(true);
        }
      } else {
        if (colourHeader) {
          setColourHeader(false);
        }
      }
    }


  }, 100)

  return (
    <section className={colourHeader ? 'header headerBackgroundColour' : 'header'}>
      <PublicMobNav isMobNavOpen={isMobNavOpen} setIsMobNavOpen={setIsMobNavOpen} />
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
        </ul>
        <button onClick={handleMenuClick} className="menu-btn">
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </button>
      </nav>
    </section>
  );
};

export default HeaderPublic;

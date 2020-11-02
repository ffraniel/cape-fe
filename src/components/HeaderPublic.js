import React, { useEffect, useState } from "react";
import "./HeaderPublic.css";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/WhiteTrans.png";
import { debounce } from "../utility/debounce";
import PublicMobNav from "./PublicMobNav";

const HeaderPublic = () => {
  const [isMobNavOpen, setIsMobNavOpen] = useState(false);

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setIsMobNavOpen((prevState) => !prevState);
  };

  const location = useLocation();

  const [colourHeader, setColourHeader] = useState(false);

  const triggerFunction = debounce(function (e) {
    // var jumbotron = document.querySelector(".jumbotron");
    var headerTrigger = document.querySelector(".header-trigger");
    var headerElem = document.querySelector(".header");

    if (headerTrigger) {
      var headerHeight = headerElem.getBoundingClientRect().height;
      var bottomJumbotron = headerTrigger.getBoundingClientRect().top;

      if (
        window.scrollY >
        bottomJumbotron + headerTrigger.offsetHeight - headerHeight
      ) {
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

  useEffect(() => {
    const scrollHandler = (e) => {
      triggerFunction(e);
    };

    window.addEventListener("scroll", scrollHandler);
    if (location.pathname !== "/") {
      setColourHeader(true);
    }

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [triggerFunction, location.pathname]);

  return (
    <section
      className={
        colourHeader
          ? "header public-header headerBackgroundColour"
          : "header public-header"
      }
    >
      <PublicMobNav
        isMobNavOpen={isMobNavOpen}
        setIsMobNavOpen={setIsMobNavOpen}
      />
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
            <NavLink className="show-nav-location" to="/about">
              What We Do
            </NavLink>
          </li>
          <li>
            <NavLink className="show-nav-location" to="/conferences">
              Conferences
            </NavLink>
          </li>
          <li>
            <NavLink className="show-nav-location" to="/constitution">
              Constitution
            </NavLink>
          </li>
          <li>
            <NavLink className="show-nav-location" to="/login">
              Log In
            </NavLink>
          </li>
        </ul>
        <button onClick={handleMenuClick} className="menu-btn">
          <span className="accessible-text">Menu</span>
          {isMobNavOpen && <span className="close-mob-nav-cross">x</span>}
          {!isMobNavOpen && (
            <>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
            </>
          )}
        </button>
      </nav>
    </section>
  );
};

export default HeaderPublic;

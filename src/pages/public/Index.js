import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./Index.css";
import HeaderPublic from "../../components/HeaderPublic";
import Home from "./Home";
import About from "./About";
import Events from "./Events";
import Event from "../../components/Event";
import Constitution from "../Constitution";
import LoginPage from "./LoginPage";
import Privacy from "./Privacy";
// import NoMatch from "../../components/NoMatch";
import Footer from "../../components/Footer";
// import NotLoggedInArticle from "../../components/NotLoggedInArticle";
import ScrollToTop from "../../components/ScrollToTop";
import PrivacyBanner from "../../components/PrivacyBanner";
import PasswordReset from "../public/PasswordReset";

const Index = () => {
  const [isLocalStorageAllowed, setIsLocalStorageAllowed] = useState("");

  useEffect(() => {
    let allowPrivacyLocalStorage = window.localStorage.getItem("allow-storage");
    if (allowPrivacyLocalStorage === "true") {
      let allowPrivacyBool = allowPrivacyLocalStorage === "true" ? true : false;
      setIsLocalStorageAllowed(allowPrivacyBool);
    }
  }, []);

  const handleAllowStorageChange = () => {
    setIsLocalStorageAllowed((prevState) => {
      if (prevState === true) {
        window.localStorage.removeItem("email-login");
        window.localStorage.setItem("allow-storage", "false");
      } else {
        window.localStorage.setItem("allow-storage", "true");
      }
      return !prevState;
    });
  };

  return (
    <section className="index">
      <Router>
        <ScrollToTop />
        <HeaderPublic />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/events/:articleID">
              <Event />
            </Route>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/constitution">
              <Constitution />
            </Route>
            <Route path="/login">
              <LoginPage
                isLocalStorageAllowed={isLocalStorageAllowed}
                handleAllowStorageChange={handleAllowStorageChange}
              />
            </Route>
            <Route path="/privacy">
              <Privacy
                isLocalStorageAllowed={isLocalStorageAllowed}
                handleAllowStorageChange={handleAllowStorageChange}
              />
            </Route>
            <Route path="/passwordreset">
              <PasswordReset />
            </Route>
            <Route path="/">
                <Redirect default to="/" />
            </Route>
          </Switch>
        </div>
        <PrivacyBanner
          isLocalStorageAllowed={isLocalStorageAllowed}
          handleAllowStorageChange={handleAllowStorageChange}
          setIsLocalStorageAllowed={setIsLocalStorageAllowed}
        />
        <Footer />
      </Router>
    </section>
  );
};

export default Index;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Index.css";
import HeaderPublic from "../../components/HeaderPublic";
import Home from "./Home";
import About from "./About";
import Conferences from "./Conferences";
import Constitution from "../Constitution";
import LoginPage from "./LoginPage";
import Privacy from "./Privacy";
import NoMatch from "../../components/NoMatch";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import PrivacyBanner from "../../components/PrivacyBanner";

const Index = () => {
  // all the frontend goes here

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
            <Route path="/conferences">
              <Conferences />
            </Route>
            <Route path="/constitution">
              <Constitution />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/privacy">
              <Privacy />
            </Route>
            <Route>
              <NoMatch default />
            </Route>
          </Switch>
        </div>
        <PrivacyBanner />
        <Footer />
      </Router>
    </section>
  );
};

export default Index;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Index.css";
import HeaderPublic from "../../components/HeaderPublic";
import Home from './Home';
import About from './About';
import Conferences from './Conferences';
import Constitution from '../Constitution';
import Join from "./Join";
import LoginPage from "./LoginPage";
import NoMatch from '../../components/NoMatch';

const Index = () => {
  // all the frontend goes here

  return (
    <section className="index">
      <Router>
        <HeaderPublic />
          <div className="margin-top">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/join">
              <Join />
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
            <Route>
              <NoMatch default />
            </Route>
          </Switch>
          </div>
      </Router>
    </section>
  );
};

export default Index;

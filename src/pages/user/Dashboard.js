import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Dashboard.css";
import HeaderUser from "../../components/HeaderUser";
import Feed from './Feed';
import Events from './Events';
import Profile from './Profile';
import Constitution from '../Constitution';

const Dashboard = () => {

  // all the logged in aceessible area goes here

  return (
    <section className="dashboard container">
      <Router>
        <HeaderUser />
        <p>Dashboard</p>
        <Switch>
          <Route exact path="/">
            <Feed />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/constitution">
            <Constitution />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </section>
  );
};

export default Dashboard;

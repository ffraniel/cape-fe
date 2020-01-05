import React from "react";
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  Redirect
 } from "react-router-dom";
import "./Dashboard.css";
import HeaderUser from "../../components/HeaderUser";
import Feed from './Feed';
import Profile from './Profile';
import Constitution from '../Constitution';
import Category from './Category';
import NoMatch from '../../components/NoMatch';
import Article from './Article';

const Dashboard = () => {

  // all the logged in aceessible area goes here

  return (
    <section className="dashboard">
      <Router>
        <HeaderUser />
        <div className="margin-top">          
          <Switch>
            <Route exact path="/">
              <Feed />
            </Route>
            <Route path="/articles/:pagination">
              <Feed />
            </Route>
            <Route path="/constitution">
              <Constitution />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/article/:articleID">
              <Article />
            </Route>
            <Route path="/category/:category">
              <Category />
            </Route>
            <Route exact path="/login">
              <Redirect to="/" />
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

export default Dashboard;

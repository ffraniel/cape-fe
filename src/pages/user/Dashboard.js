import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./Dashboard.css";
import HeaderUser from "../../components/HeaderUser";
import Feed from "./Feed";
import Dash from "./Dash";
import Profile from "./Profile";
import Constitution from "../Constitution";
import Category from "./Category";
import NoMatch from "../../components/NoMatch";
import Article from "./Article";
import UserMobNav from "../../components/UserMobNav";
import UserFooter from "../../components/UserFooter";
import ScrollToTop from "../../components/ScrollToTop";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  // all the logged in aceessible area goes here
  return (
    <section className="dashboard">
      <Router>
        <ScrollToTop />
        <HeaderUser />
        <div className="margin-top dashboard-main">
          <Sidebar />
          <div className="main">
            <Switch>
              <Route exact path="/">
                <Dash />
              </Route>
              <Route path="/articles">
                <Feed />
              </Route>
              <Route path="/constitution">
                <Constitution />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route exact path="/category/news">
                <Redirect to="/articles" />
              </Route>
              <Route path="/category/:category">
                <Category />
              </Route>
              <Route path="/article/:articleID">
                <Article />
              </Route>
              <Route exact path="/login">
                <Redirect to="/" />
              </Route>
              <Route>
                <NoMatch default />
              </Route>
            </Switch>
          </div>
        </div>
        <UserFooter />
      </Router>
    </section>
  );
};

export default Dashboard;

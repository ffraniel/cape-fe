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
import UserFooter from "../../components/UserFooter";
import ScrollToTop from "../../components/ScrollToTop";
import Sidebar from "../../components/Sidebar";
import Favourites from "../user/Favourites";
import PrivateEvent from "./PrivateEvent";
import PrivateEvents from "./PrivateEvents";
import useLocalStorage from "../../hooks/useLocalStorage";

const Dashboard = () => {
  // all the logged in aceessible area goes here

  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const addFavourite = (id) => {
    let newFavouritesArray = [];
    for (var i = 0; i < favourites.length; i++) {
      newFavouritesArray[i] = favourites[i];
    }
    newFavouritesArray.push(id);
    setFavourites(newFavouritesArray);
  };

  const removeFavourite = (id) => {
    let removedFavouriteArray = favourites.filter((itemID) => {
      return itemID !== id;
    });
    setFavourites(removedFavouriteArray);
  };

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
              {/* <Route path="/events/:conferenceID">
                <PrivateEvent />
              </Route>
              <Route path="/events">
                <PrivateEvents />
              </Route> */}
              <Route path="/favourites">
                <Favourites
                  favourites={favourites}
                  addFavourite={addFavourite}
                  removeFavourite={removeFavourite}
                />
              </Route>
              <Route path="/article/:articleID">
                <Article
                  favourites={favourites}
                  addFavourite={addFavourite}
                  removeFavourite={removeFavourite}
                />
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

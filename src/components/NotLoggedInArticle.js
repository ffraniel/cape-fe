import React from "react";
import "./NotLoggedInArticle.css";

const NotLoggedInArticle = () => (
  <div className="not-logged-in page medium-vertical-padding">
    <div className="container">
      <h3 className="not-logged-in--title">Not logged in</h3>
      <p className="not-logged-in--text">
        You've tried to see an article without being signed in.
      </p>
      <p className="not-logged-in--text">Sign in to see the article.</p>
    </div>
  </div>
);

export default NotLoggedInArticle;

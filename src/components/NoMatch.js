import React from 'react';
import { Link } from "react-router-dom";
import './NoMatch.css';

const NoMatch = () => {
  return (
    <div className="no-match large-vertical-padding">
      <div className="container">
        <h1 className="center-text large-text header-trigger">404</h1>
        <h1 className="red-text no-match-text">Oh no, this is embarassing </h1>
        <h4 className="center-text">It seems like something has gone wrong!</h4>
        <h4 className="center-text">We can't find the page you were looking for.</h4>
        <p className="center-text">Try refreshing the page or going <Link to="/">Home</Link></p>
      </div>
    </div>
  );
};

export default NoMatch;
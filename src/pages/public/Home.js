import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import conversationImage from '../../assets/conversation.svg';

const Home = () => {
  return (
    <>
    <section className="jumbotron">
      <div class="jumbo-image-container">
        <img src={conversationImage} alt="drawing of two adults talking" />
      </div>
      <div className="jumbo-text-container">
        <div className="jumbo-text">
          <h1>CAPE</h1>
          <h2>For professionals who support child protection and 
            safeguarding activities and training across a range of ed​ucation and similar settings</h2>
          <Link className="button primary-button" to="/about">Learn More</Link>
          <Link className="button secondary-button" to="/join">Join</Link>
        </div>
      </div>
    </section>
    <section className="news-background">
      <div className="three-panel">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
    </>
  )
};

export default Home;
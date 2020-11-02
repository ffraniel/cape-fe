import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { fadeInConfig } from "../../animations";
import Mosaic from "../../components/Mosaic";
import JoinTemp from "../../components/JoinTemp";

const Home = () => {
  const animationProps = useSpring(fadeInConfig);

  return (
    <>
      <animated.section className="jumbotron" style={animationProps}>
        <div className="jumbo-image-container">
          <Mosaic />
        </div>
        <div className="jumbo-text-container">
          <div className="jumbo-text">
            <h1 className="header-trigger">CAPE</h1>
            <h2>
              For professionals who support child protection and safeguarding
              activities and training across a range of education and similar
              settings
            </h2>
            <Link className="btn primary-btn" to="/about">
              About CAPE
            </Link>
            <Link className="btn secondary-btn" to="/conferences">
              Conferences
            </Link>
          </div>
        </div>
      </animated.section>
      <section className="news-background">
        <div className="three-panel">
          <div className="three-panel--panel">
            <h3>SUPPORT</h3>
            <p>
              Child protection work is difficult, complex and sensitive. CAPE
              supports members through regular meetings and this website and
              forum. CAPE professionals provide advice, training and support to
              Designated Leads in Schools and offer a network of support for its
              members.
            </p>
          </div>
          <div className="three-panel--panel">
            <h3>DEVELOPMENT OPPORTUNITIES</h3>
            <p>
              CAPE members are professionals who provide training and
              consultancy to Designated Leads in schools. CAPE recognises that
              our members need to continuously update their knowledge. Regular
              development opportunities are offered to CAPE members.
            </p>
          </div>
          <div className="three-panel--panel">
            <h3>PROFESSIONAL PRACTICE</h3>
            <p>
              CAPE is a long-standing organisation which aims to continually
              improve safeguarding practice across education. CAPE regularly
              responds to government consultations and has representation on a
              number of national development groups setup to inform and improve
              professional practice.
            </p>
          </div>
        </div>
      </section>
      <JoinTemp />
    </>
  );
};

export default Home;

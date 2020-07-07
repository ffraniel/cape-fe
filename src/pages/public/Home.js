import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { fadeInConfig } from "../../animations";
import conversationImage from "../../assets/conversation.svg";
import JoinTemp from "../../components/JoinTemp";
import downArrow from "../../assets/down-arrow.png";

const Home = () => {
  const animationProps = useSpring(fadeInConfig);

  return (
    <>
      <animated.section className="jumbotron" style={animationProps}>
        <div className="jumbo-image-container">
          <img src={conversationImage} alt="drawing of two adults talking" />
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
              Learn More
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
              forum. CAPE Professionals provide advice, training and support to
              Designated leads in Schools a network of support for members.
            </p>
          </div>
          <div className="three-panel--panel">
            <h3>DEVELOPMENT OPPORTUNITIES</h3>
            <p>
              CAPE members are professionals who provide training and
              consultancy to Designated Leads in schools. CAPE recognises that
              our members need to continuously update their knowledge and
              development opportunities are offered to CAPE members.
            </p>
          </div>
          <div className="three-panel--panel">
            <h3>PROFESSIONAL PRACTICE</h3>
            <p>
              CAPE is a long-standing organisation which aims to continually
              improve safeguarding practice across the education sector. CAPE
              regularly responds to Government consultations and has
              representation on a number of national development groups set up
              to inform and improve professional practice.
            </p>
          </div>
        </div>
        <a
          className="btn secondary-btn basic-box-shadow joining-cape-btn"
          href="#joining-cape"
        >
          Joining CAPE{" "}
          <span>
            <img className="down-arrow" src={downArrow} alt="Down Arrow" />
          </span>
        </a>
        {/* <div className="dark-background">
          <div className="medium-vertical-padding container">
            <h3>MORE EEEEsfjsdjgvd</h3>
            <p>
              So if we had more text it would go herere, weshsd dssof, CAPE
              supports members by coming together for meetings to discuss their
              own work and the issues they are facing. Professionals{" "}
            </p>
          </div>
        </div> */}
      </section>
      <JoinTemp />
    </>
  );
};

export default Home;

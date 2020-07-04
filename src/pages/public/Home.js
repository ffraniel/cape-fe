import React, { useRef } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { fadeInConfig } from "../../animations";
import conversationImage from "../../assets/conversation.svg";
import Join from "../../components/Join";

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
              CAPE supports members by coming together for meetings to discuss
              their own work and the issues they are facing. Professionals whose
              role is to provide advice and support to Designated leads in
              Schools are often doing so without supervision for themselves.
              Child protection work is difficult, complex and sensitive and CAPE
              aims to support members by meeting on a regular basis and through
              the member's forum.
            </p>
            <a
              className="btn secondary-btn basic-box-shadow"
              href="#joining-cape"
            >
              Joining CAPE
            </a>
          </div>
          <div className="three-panel--panel">
            <h3>DEVELOPMENT OPPORTUNITIES</h3>
            <p>
              CAPE members are professionals who provide training and
              consultancy to Designated Leads in schools. Cape recognises that
              CAPE members need to continuously update their own knowledge and
              development opportunities are offered to CAPE members.
            </p>
            <a
              className="btn secondary-btn basic-box-shadow"
              href="#joining-cape"
            >
              Joining CAPE
            </a>
          </div>
          <div className="three-panel--panel">
            <h3>PROFESSIONAL PRACTICE</h3>
            <p>
              CAPE is a long standing organisation and recognised as useful
              partners in developing practice. CAPE regularly responds to
              Government consultations and CAPE has representation on a number
              of national development groups set up to inform and improve
              professional practice.
            </p>
            <a
              className="btn secondary-btn basic-box-shadow"
              href="#joining-cape"
            >
              Joining CAPE
            </a>
          </div>
        </div>
        <div className="dark-background">
          <div className="medium-vertical-padding container">
            <h3>MORE EEEEsfjsdjgvd</h3>
            <p>
              So if we had more text it would go herere, weshsd dssof, CAPE
              supports members by coming together for meetings to discuss their
              own work and the issues they are facing. Professionals{" "}
            </p>
          </div>
        </div>
      </section>
      <Join />
    </>
  );
};

export default Home;

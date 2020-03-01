import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import conversationImage from '../../assets/conversation.svg';

const Home = () => {
  return (
    <>
    <section className="jumbotron">
      <div className="jumbo-image-container">
        <img src={conversationImage} alt="drawing of two adults talking" />
      </div>
      <div className="jumbo-text-container">
        <div className="jumbo-text">
          <h1>CAPE</h1>
          <h2>For professionals who support child protection and 
            safeguarding activities and training across a range of ed​ucation and similar settings</h2>
          <Link className="btn primary-btn" to="/about">Learn More</Link>
          <Link className="btn secondary-btn" to="/conferences">Conferences</Link>
        </div>
      </div>
    </section>
    <section className="news-background">
      <div className="three-panel">
        <div className="three-panel--panel">
          <h3>CAPE Supports it's members</h3>
          <a className="panel-link-button" href="#support">See How CAPE support their members</a>
        </div>
        <div className="three-panel--panel">
          <h3>CAPE Provides development opportunities</h3>
          <a className="panel-link-button" href="#opportunities">Learn more about opportunities</a>
        </div>
        <div className="three-panel--panel">
          <h3>CAPE Informs professional practice</h3>
          <a className="panel-link-button" href="#practices">Informing professional practices</a>
        </div>
      </div>
      <div className="container">
        <h3>MORE EEEEsfjsdjgvd</h3>
        <p>So if we had more text it would go herere, weshsd dssof, CAPE supports members by coming together for meetings to discuss their own work and the issues they are facing. Professionals </p>
      </div>
    </section>
    <section className="more-info">
      <div className="more-info--element container" id="support">
        <h3>Support</h3>
        <p>CAPE supports members by coming together for meetings to discuss their own work and the issues they are facing. Professionals whose role is to provide advice and support to Designated leads in Schools are often doing so without supervision for themselves. Child protection work is difficult, complex and sensitive and CAPE aims to support members by meeting on a regular basis and through the member's forum.</p>
      </div>
      <div className="more-info--element container" id="#opportunities">
        <h3>Development Opportunities</h3>
        <p>CAPE members are professionals who provide training and consultancy to Designated Leads in schools. Cape recognises that CAPE members need to continuously update their own knowledge and development opportunities are offered to CAPE members.</p>
      </div>
      <div className="more-info--element container" id="practices">
        <h3>Professional Partners</h3>
        <p>CAPE is a long standing organisation and recognised as useful partners in developing practice. CAPE regularly responds to Government consultations and CAPE has representation on a number of national development groups set up to inform and improve professional practice.</p>
      </div>
    </section>
    </>
  )
};

export default Home;
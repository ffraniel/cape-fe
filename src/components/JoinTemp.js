import React from "react";
import { Link } from "react-router-dom";
import "./Join.css";

const Join = () => {
  return (
    <section className="join-form-container" id="joining-cape">
      <div className="container">
        <div className="join-title">
          <h3>CAPE Membership</h3>
          <h4>​£25 per annum (April - March)</h4>
        </div>
        <div className="join-text-container">
          <p className="join-intro-text">
            Please read the{" "}
            <Link to="/constitution" className="green-link">
              CAPE Constitution
            </Link>{" "}
            before completing this form to ensure that membership will be of use
            to you and relevant to your work role.
          </p>
          <p className="join-intro-text">
            ​CAPE is a networking organisation for individuals who work across a
            range of education settings and services to support child protection
            and safeguarding activities and training. Membership is not offered
            to individuals who work only in one establishment, as discussions in
            meetings are not relevant to the specifics of the work of for
            example, school staff or governors.
          </p>
          <p className="join-intro-text">
            CAPE does not offer accreditation to members, provide an endorsement
            of quality of work undertaken by members, or supply the means for
            members to advertise services.
          </p>
          <p className="join-intro-text">
            CAPE's geographical base is in the north of England. Membership is
            not limited by this, but meetings are held at a variety of venues
            ﻿in this area, frequently across the M62 corridor or close to the
            A1.
          </p>
          <p className="join-intro-text">
            CAPE relies on the goodwill of members to provide venues for
            meetings, support and administer CAPE business, and to develop
            material relevant to safeguarding in education.
          </p>
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd2KOJPuJRgdnaIZmo85tX7M4NXcHLCrNJTdjQZ88AXRbCliw/viewform?usp=sf_link"
          target="_blank"
          className="google-form-link"
          rel="noopener noreferrer"
        >
          Go to Join form
        </a>
      </div>
    </section>
  );
};

export default Join;

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Join.css';
import fire from "../config/fire";

const Join = () => {

  const toTopOfPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const [yourRole, setYourRole] = useState('');
  const [whyJoin, setWhyJoin] = useState('');
  const [moreInfo, setMoreInfo] = useState('');
  const [memberAgreement, setMemberAgreement] = useState(false);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formEntries = [firstName, lastName, email, address, telephone, yourRole, whyJoin, moreInfo, memberAgreement];
    formEntries.forEach(entry => {
      if (!entry) {

      }
    })

      //send data//
      //handle success//
        //delete data field

      setFirstName('');
      setLastName('');
      setEmail('');
      setAddress('');
      setTelephone('');
      setYourRole('');
      setWhyJoin('');
      setMoreInfo('');
      setMemberAgreement('');

      setSuccess(false);
      setError(true);
    
    //handle failure///
      //highlight errors
  }

  return (
    <section className="join-form-container" id="joining-cape">
      <div className="container">
        <div className="join-title">
          <h3>CAPE Membership</h3>
          <h4>​£25 per annum (April - March)</h4>
        </div>
        <div className="join-text-container">
          <p className="join-intro-text">Please read the <Link onClick={toTopOfPage} to="/constitution" className="green-link">CAPE Constitution</Link> before completing this form to ensure that membership will be of use to you and relevant to your work role.</p>
          <p className="join-intro-text">​CAPE is a networking organisation for individuals who work across a range of education settings and services to support child protection and safeguarding activities and training. Membership is not offered to individuals who work only in one establishment, as discussions in meetings are not relevant to the specifics of the work of for example, school staff or governors.</p> 
          <p className="join-intro-text">CAPE does not offer accreditation to members, provide an endorsement of quality of work undertaken by members, or supply the means for members to advertise services.</p>
          <p className="join-intro-text">CAPE's geographical base is in the north of England.  Membership is not limited by this, but meetings are held at a variety of venues ﻿in this area, frequently across the M62 corridor or close to the A1.</p>
          <p className="join-intro-text">CAPE relies on the goodwill of members to provide venues for meetings; support and administer CAPE business; and to develop material relevant  to safeguarding in education.</p>
          <p><span className="red-text">*</span>indicates response required</p>
        </div>
        {success && 
        <div className="success-form animated-form-notice">
          <h3 className="green-text">Thanks! We will look at your request to join and let you know our decision.</h3>
        </div>}
        {error && 
        <div className="failure-form animated-form-notice">
          <h3 className="red-text">Sorry! There has been an error with the form! Refresh the page and try again, or contact CAPE directly.</h3>
        </div>}
        {!success && !error &&
        <form onSubmit={handleSubmit} className="join-form">
          <p className="join-form--text-label"><span className="red-text">*</span>Name</p>
          <div className="form-row">
            <label htmlFor="firstName" className="label">First Name</label>
            <input name="firstName" type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} />
          </div>
          <div className="form-row">
            <label htmlFor="secondName" className="label">Surname</label>        
            <input name="secondName" type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} />
          </div>
          <p className="join-form--text-label"><span className="red-text">*</span>Email</p>
          <div className="form-row">
            <label htmlFor="email" className="label-hidden">Email</label>
            <input name="email" type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          </div>  
          <p className="join-form--text"><span className="red-text">*</span>Address</p>
          <div className="form-row">
            <label className="label-hidden" htmlFor="address">Address</label>
            <input name="address" type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}} />
          </div>
          <p className="join-form--text">Telephone</p>
          <div className="form-row">
            <label className="label-hidden" htmlFor="telephone">Telephone</label>
            <input type="text" name="telephone" value={telephone} onChange={(e)=>{setTelephone(e.target.value)}} />
          </div>

          <p className="join-form--reason-text">We welcome new members and would like to know a little about you.  For example, how will membership be of benefit to you; and how would you like to contribute to CAPE activities (specialist knowledge or expertise, events organisation, facilities to host meetings, particular interests etc)?</p>

          <p className="join-form--text"><span className="red-text">*</span>What is your work role?</p>
          <div className="form-row">
            <label className="label-hidden" htmlFor="yourRole">What is your work role?</label>
            <input type="text" name="yourRole" value={yourRole} onChange={(e)=>{setYourRole(e.target.value)}} />
          </div>
          <p className="join-form--text"><span className="red-text">*</span>Why are you interested in joining CAPE?</p>
          <div className="form-row">
            <label className="label-hidden" htmlFor="whyJoin">Why are you interested in joining CAPE?</label>
            <input type="text" name="whyJoin" value={whyJoin} onChange={(e)=>{setWhyJoin(e.target.value)}} />
          </div>

          <p className="join-form--text">Please provide any further information here</p>
          
          <div className="form-row">
            <label className="label-hidden" htmlFor="moreInfo">Please provide any further information here</label>
            <input type="text" name="moreInfo" value={moreInfo} onChange={(e)=>{setMoreInfo(e.target.value)}} />
          </div>

          <p className="join-form--checkbox"><span className="red-text">*</span>Condition of membership</p>
          
          <p className="join-form--checkbox inline-elem"><span className="red-text">*</span>I agree to abide by the principles in the Constitution</p>
          <div className="form-row">
            <label className="label-hidden" htmlFor="memberAgreement">Condition of membership</label>
            <input className="inline-elem" type="checkbox" name="memberAgreement" value={memberAgreement} onChange={()=>{setMemberAgreement(prevState => !prevState)}} />
          </div>
          <input className="btn primary-btn" type="submit" />
        </form>}
      </div>
    </section>
  )
}

export default Join;
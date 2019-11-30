import React from 'react';
import './Dashboard.css';
import HeaderUser from '../../components/HeaderUser';
import fire from '../../config/fire';

const Dashboard = () => {

  const signOut = () => {
    fire.auth().signOut().then(function() {
      console.log("sign-out successful.");
    }).catch(function(error) {
      console.log(error)
    });
  };

  // all the logged in aceessible area goes here

  return (
    <section className="dashboard container">
      <HeaderUser />
      <p>Dashboard</p>
      <button onClick={signOut} >SIGN OUT</button>
    </section>
  )
}

export default Dashboard;
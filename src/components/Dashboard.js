import React from 'react';
import './Dashboard.css';
import fire from '../config/fire';

const Dashboard = () => {

  const signOut = () => {
    fire.auth().signOut().then(function() {
      console.log("sign-out successful.");
    }).catch(function(error) {
      console.log(error)
    });
  };

  return (
    <section>
      <p>Dashboard</p>
      <button onClick={signOut} >SIGN OUT</button>
    </section>
  )
}

export default Dashboard;
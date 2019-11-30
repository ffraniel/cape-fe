import React from 'react';
import './Index.css';
import Login from '../components/Login';
import HeaderPublic from '../components/HeaderPublic';

const Index = () => {

  // all the frontend goes here 

  return (
    <section className="index container">
      <HeaderPublic />
      <h1>Index</h1>
      <Login />
    </section>
  )
}

export default Index;
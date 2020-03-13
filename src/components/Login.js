import React, { useState, useEffect } from 'react';
import './Login.css';
import fire from '../config/fire';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);

  useEffect(() => {
    let storedEmail = window.localStorage.getItem('email-login');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, [])
  
  const handleInput = (e) => {
    e.preventDefault();
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(email, password)
    .then(()=>{
      setLoginError(false);
      window.localStorage.setItem('email-login', email);
    })
    .catch(function(error) {
      // setLoginError(error.message);
      setLoginError(true);
    });
  };

  return (
    <section className="form-element">
      <h3>Log In</h3>
      {loginError && <h3>Incorrect Username and/or Password. Please try again.</h3>}
      <form onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input type="text" name="email" placeholder="Email" onChange={handleInput} value={email} />
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="Password" onChange={handleInput} value={password} />
        <input type="submit" value="Sign In" />
      </form>
    </section>
  )
}

export default Login;
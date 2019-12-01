import React, { useState } from 'react';
import './Login.css';
import fire from '../config/fire';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  

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
      .catch(function(error) {
      setLoginError(error.message);
    });
  };

  return (
    <section className="form-element">
      <p>Sign In</p>
      {loginError && <h3>{loginError}</h3>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="Email" onChange={handleInput} value={email} />
        <input type="password" name="password" placeholder="Password" onChange={handleInput} value={password} />
        <input type="submit" value="Sign In" />
      </form>
    </section>
  )
}

export default Login;
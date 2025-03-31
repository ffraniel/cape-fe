import React, { useState, useEffect } from "react";
import "./Login.css";
import fire from "../config/fire";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Loading from "./Loading";

const Login = ({ isLocalStorageAllowed, handleAllowStorageChange }) => {

  const auth = getAuth(fire);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const [loginLoading, setLoginLoading] = useState(false);

  useEffect(() => {
    if (isLocalStorageAllowed) {
      let storedEmail = window.localStorage.getItem("email-login");
      if (storedEmail) {
        setEmail(storedEmail);
      }
    }
  }, [isLocalStorageAllowed]);

  const handleInput = (e) => {
    e.preventDefault();
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    setLoginError(null);
    setLoginLoading(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (isLocalStorageAllowed) {
          window.localStorage.setItem("email-login", email);
        }
      })
      .catch(function (error) {
        // setLoginError(error.message);
        console.log(error.message);
        setLoginLoading(false);
        setLoginError(true);
      });
  };

  return (
    <section className="form-element container">
      {loginLoading && <Loading />}
      <h3 className="login-title">Log In</h3>
      <p className="login-sub-title">Members area</p>
      {loginError && (
        <h3 className="red-text login-error-animation">
          Incorrect Username and/or Password. Please try again.
        </h3>
      )}
      <form onSubmit={handleSubmit}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleInput}
          value={email}
          autoComplete="username email"
        />
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInput}
          value={password}
          autoComplete="off"
        />
        <div className="remember-me-line">
          <label htmlFor="privacy-checkbox">Remember Me</label>
          <input
            type="checkbox"
            name="privacy-checkbox"
            checked={isLocalStorageAllowed}
            onChange={handleAllowStorageChange}
          />
        </div>
        <input className="btn primary-btn" type="submit" value="LOG IN" />
      </form>
    </section>
  );
};

export default Login;

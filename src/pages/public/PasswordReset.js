import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { animationConfig } from "../../animations";
import "./PasswordReset.css";
// import firebase from "firebase/app";
import fire from "../../config/fire";
import { getAuth } from "firebase/auth";
const auth = getAuth(fire);
import Loading from "../../components/Loading";

const PasswordReset = () => {
  const animationProps = useSpring(animationConfig);

  // var auth = firebase.auth();

  const [email, setEmail] = useState("");
  const [resetRequested, setResetRequested] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    auth
      .sendPasswordResetEmail(email)
      .then(function () {
        // Email sent
        setLoading(false);
        setResetRequested(true);
      })
      .catch(function (error) {
        setLoading(false);
        setError(true);
      });
  };

  return (
    <animated.div
      className="profile-page reset-password-page page large-vertical-padding"
      style={animationProps}
    >
      {loading && <Loading />}
      <div className="container small-vertical-padding">
        <h3 className="reset-password-heading">Request Password Reset</h3>
        {!resetRequested && (
          <form className="form-reset" onSubmit={handleFormSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleInput}
              name="email"
            />
            <input
              className="primary-btn btn reset-btn"
              type="submit"
              value="Request Reset"
            />
          </form>
        )}

        {resetRequested && !error && (
          <div className="password-reset-max-width">
            <h3>A password reset link will be sent to '{email}'</h3>
          </div>
        )}
        {error && (
          <div className="password-reset-max-width">
            <h3>The account {email} doesn't exist in our database.</h3>
            <p>
              Please check for any typing errors and try again. If the issues
              persist please contact 'capeukweb@gmail.com'.
            </p>
          </div>
        )}
      </div>
    </animated.div>
  );
};

export default PasswordReset;

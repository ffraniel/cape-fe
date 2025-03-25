import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { animationConfig } from "../../animations";
import "./Profile.css";
// import fire from "../../config/fire";
// import firebase from "firebase/app";
import fire from "../../config/fire";
import { getAuth } from "firebase/auth";
const auth = getAuth(fire);
import Loading from "../../components/Loading";

const Profile = () => {
  const user = auth().currentUser;

  let welcome;
  if (user) {
    welcome = `Hi ${user.email}`;
  } else {
    welcome = "There appears to have been an error. Try refreshing the page.";
  }

  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  // change this back to false
  const [errorMessage, setErrorMessage] = useState(null);
  const [updateSucess, setUpdateSuccess] = useState(null);
  const [loadingPassword, setLoadingPassword] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();
    if (errorMessage) {
      console.log("if error here");
      setErrorMessage(false);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "current-password") {
      setCurrentPassword(e.target.value);
    } else if (e.target.name === "password1") {
      setPassword1(e.target.value);
    } else if (e.target.name === "password2") {
      setPassword2(e.target.value);
    }
  };

  const resetPassword = async (oldPassword, newPassword) => {
    setLoadingPassword(true);

    return user
      .updatePassword(newPassword)
      .then(function () {
        console.log("yes friend, reset that password");
        setLoadingPassword(false);
        setUpdateSuccess(true);
        setEmail("");
        setCurrentPassword("");
        setPassword1("");
        setPassword2("");
      })
      .catch(function (error) {
        setLoadingPassword(false);
        setCurrentPassword("");
        setPassword1("");
        setPassword2("");
        console.log("Reset Failed");
        if (error.code === "auth/weak-password") {
          setErrorMessage(
            "Sorry, unacceptable password. Passwords must be at least 6 charecters long."
          );
        } else {
          setErrorMessage("Unknown error, contact your site admin");
          console.log("it messed up in a weird way pal");
        }
        console.log(error);
      });
  };

  const handleAccessUpdate = (e) => {
    e.preventDefault();
    setLoadingPassword(true);

    var userForPassword = auth().currentUser;
    const credential = auth.EmailAuthProvider.credential(
      userForPassword.email,
      currentPassword
    );

    userForPassword
      .reauthenticateWithCredential(credential)
      .then(function () {
        setLoadingPassword(false);
        setAccessGranted(true);
        setErrorMessage(null);
        console.log("oh yeah! reaunthenticated");
      })
      .catch(function (error) {
        setLoadingPassword(false);
        setErrorMessage("Sorry, incorrect email or password");
        setCurrentPassword("");

        console.log(
          "error reauntheticating: this person doesn't have access ",
          error
        );
      });
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      setErrorMessage(
        "Sorry, the passwords provided did not match. Please try again."
      );
      setPassword1("");
      setPassword2("");
    } else {
      setErrorMessage(null);
      resetPassword(currentPassword, password1);
    }
  };

  const cancelProcess = () => {
    setErrorMessage(null);
    setLoadingPassword(false);
    setUpdateSuccess(null);
    setAccessGranted(false);
    setEmail("");
    setCurrentPassword("");
    setPassword1("");
    setPassword2("");
  };

  const animationProps = useSpring(animationConfig);

  return (
    <animated.div className="profile-page" style={animationProps}>
      <div className="container">
        {loadingPassword && <Loading />}
        <h4 className="header-trigger">{welcome}</h4>
        <h3>Managing Your Password</h3>
        {errorMessage && (
          <h3 className="password-reset-error-message">{errorMessage}</h3>
        )}
        {updateSucess && (
          <div className="successful-home-link-container">
            <h3 className="password-reset-success-message">
              Password Successfully Updated
            </h3>
            <Link className="successful-home-link" to="/">
              Home
            </Link>
          </div>
        )}
        {!updateSucess && (
          <>
            {!accessGranted && (
              <form className="update-password" onSubmit={handleAccessUpdate}>
                <p className="form-text-label">
                  If you wish to change your account password use the form
                  below.
                </p>
                <h5 className="form-text-label">
                  Confirm your current account details
                </h5>
                <label htmlFor="email">Email</label>
                <input
                  className={
                    errorMessage ? "input-error input-text" : "input-text"
                  }
                  type="text"
                  name="email"
                  placeholder="email@address.org"
                  onChange={handleInput}
                  value={email}
                />
                <label htmlFor="current-password">Password</label>
                <input
                  className={
                    errorMessage ? "input-error input-text" : "input-text"
                  }
                  type="password"
                  name="current-password"
                  placeholder="Password"
                  onChange={handleInput}
                  value={currentPassword}
                  autoComplete="off"
                />

                <input
                  className="btn submit-btn"
                  type="submit"
                  value="Confirm your password"
                />
              </form>
            )}
            {accessGranted && (
              <form
                className="update-password container"
                onSubmit={handlePasswordUpdate}
              >
                <p className="form-text-label">Set a new password</p>
                <label htmlFor="password1">Password</label>
                <input
                  className={
                    errorMessage ? "input-error input-text" : "input-text"
                  }
                  type="password"
                  name="password1"
                  placeholder="Password"
                  onChange={handleInput}
                  value={password1}
                  autoComplete="off"
                />

                <p className="form-text-label">Confirm your new password</p>
                <label htmlFor="password2">
                  Please confirm your new password.
                </label>
                <input
                  className={
                    errorMessage ? "input-error input-text" : "input-text"
                  }
                  type="password"
                  name="password2"
                  placeholder="Password"
                  onChange={handleInput}
                  value={password2}
                  autoComplete="off"
                />
                <div className="center container">
                  <input
                    className="btn submit-password-btn"
                    type="submit"
                    value="Change Password"
                  />
                  <button className="btn cancel-btn" onClick={cancelProcess}>
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </>
        )}
        {/* <div className="profile--more">
          <h3>Leaving CAPE website</h3>
          <p>
            Should you wish to remove yourself from the CAPE website please
            contact the current CAPE Chair.
          </p>
        </div> */}
      </div>
    </animated.div>
  );
};

export default Profile;

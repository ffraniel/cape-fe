import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { animationConfig } from '../../animations';
import './Profile.css';
import fire from '../../config/fire';
import firebase from 'firebase';
import Loading from '../../components/Loading';

const Profile = () => {

  const user = fire.auth().currentUser;

  let welcome;
  if (user) {
    welcome = `Hello ${user.email}`;
  } else {
    welcome = 'There appears to have been an error. Try refreshing the page.';
  }

  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  // change this back to false
  const [errorMessage, setErrorMessage] = useState(null);
  const [updateSucess, setUpdateSuccess] = useState(null);
  const [loadingPassword, setLoadingPassword] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'current-password') {
      setCurrentPassword(e.target.value);
    } else if (e.target.name === 'password1') {
      setPassword1(e.target.value);
    } else if (e.target.name === 'password2') {
      setPassword2(e.target.value);
    }
  };

  const resetPassword = async (oldPassword, newPassword) => {
  
    setLoadingPassword(true);
   
    return user.updatePassword(newPassword)
      .then(function () {
        console.log("yes friend, reset that password");
        setLoadingPassword(false);
        setUpdateSuccess(true);
        setEmail('');
        setCurrentPassword('');
        setPassword1('');
        setPassword2('');
      })
      .catch(function(error) {
        setLoadingPassword(false);
        setCurrentPassword('');
        setPassword1('');
        setPassword2('');
        console.log("Reset Failed");
        if (error.code === "auth/weak-password") {
          setErrorMessage('Sorry, unacceptable password. Passwords must be at least 6 charecters long.');
        } else {
          setErrorMessage("Unknown error, contact your site admin");
          console.log("it messed up in a weird way pal");
        }
        console.log(error);
      });
  }

  const handleAccessUpdate = (e) => {
    e.preventDefault();
    setLoadingPassword(true);

    var userForPassword = firebase.auth().currentUser;
    const credential = firebase.auth.EmailAuthProvider.credential(
      userForPassword.email, 
      currentPassword
    );

    userForPassword.reauthenticateWithCredential(credential)
      .then(function () {
        setLoadingPassword(false);
        setAccessGranted(true);
        setErrorMessage(null);
        console.log("oh yeah! reaunthenticated");
      })
      .catch(function (error) {
        setLoadingPassword(false);
        setErrorMessage('Sorry, incorrect email or password');

        console.log("error reauntheticating: this person doesn't have access ", error);
      })    
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      setErrorMessage('Sorry, the passwords provided did not match. Please try again.');
      setPassword1('');
      setPassword2('');
    } else {
      setErrorMessage(null);
      resetPassword(currentPassword, password1);
    }  
  }

  const animationProps = useSpring(animationConfig);

  return (
    <animated.div className="profile-page" style={animationProps}>
      <h2 className="header-trigger">{welcome}</h2>
      <h3>Managing Your Password</h3>
      <p>To change your passport use the form below.</p>
      {loadingPassword && <Loading />}
      {errorMessage && <h3 className="password-reset-error-message">{errorMessage}</h3>}
      {updateSucess && <h3 className="password-reset-success-message">Password Successfully Updated</h3>}
      {!updateSucess && 
        <>
          {!accessGranted &&
          <form className="update-password container" onSubmit={handleAccessUpdate} >
            <label htmlFor="email">Please enter your email address associated with your CAPE account.</label>
            <input type="text" name="email" placeholder="email@address.org" onChange={handleInput} value={email} />
            <label htmlFor="current-password">Please enter your current password.</label>
            <input type="password" name="current-password" placeholder="Old Password" onChange={handleInput} value={currentPassword} />
              
            <input className="submit-btn" type="submit" />
          </form>
          }
          {accessGranted && 
          <form className="update-password container" onSubmit={handlePasswordUpdate} >
            <label htmlFor="password1">Please enter your new password. Passwords must be at least 6 characters long.</label>
            <input type="password" name="password1" placeholder="password" onChange={handleInput} value={password1} />
            
            <label htmlFor="password2">Please enter the new password again</label>
            <input type="password" name="password2" placeholder="password" onChange={handleInput} value={password2} />
            
            <input className="submit-btn" type="submit" />
          </form>
          }
        </>
      }
    </animated.div>
  );
};

export default Profile;
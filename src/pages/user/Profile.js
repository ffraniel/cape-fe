import React, { useState } from 'react';
import './Profile.css';
import fire from '../../config/fire';
import firebase from 'firebase';

const Profile = () => {

  const user = fire.auth().currentUser;

  let welcome;
  if (user) {
    welcome = `Hello ${user.email}`;
  } else {
    welcome = 'There appears to have been an error. Try refreshing the page.'
  }

  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [updatingPassword, setUpdatingPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [updateSucess, setUpdateSuccess] = useState(null);

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

  const reauntheticate = async (password) => {
    var userForPassword = firebase.auth().currentUser;
    const credential = firebase.auth.EmailAuthProvider.credential(
      userForPassword.email, 
      password1
    );
    try {
      await user.reauthenticateWithCredential(credential);
      try {
        await user.updatePassword(password);
        setUpdateSuccess(true);
        setUpdatingPassword(false);
      } catch (e2) {
        console.log(e2);
        setErrorMessage('Sorry, there appears to have been an error setting your new password. Please try again or contact an admin about this issue.');
      }
    }
    catch(e) {
      console.log(e);
      setErrorMessage('Sorry, your current password was incorrect. Please try again.');
    }
  }

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      setErrorMessage('Sorry, the passwords provided did not match. Please try again.');
    } else {
      reauntheticate(password1);
    }
      
      

      // user.reauthenticateWithCredential(credential)
      //   .then(() => {
      //   // send off new password to firebase
      //     user.updatePassword(password1).then(() => {
      //     })
      //   .catch(function(error) {
      //     console.log(error)
      //     setErrorMessage('Sorry, there appears to have been an error setting your new password. Please try again or contact an admin about this issue.');
      //   });
      // })
      // .catch(function(error) {
      //   console.log(error)
      //   setErrorMessage('Sorry, your current password was inccorrect. Please try again.');
      // });
    
    setEmail('');
    setCurrentPassword('');
    setPassword1('');
    setPassword2('');
  };  

  return (
    <div className="profile-page container">
      <h2>{welcome}</h2>
      {!updatingPassword && 
        <button onClick={()=>{
          setUpdatingPassword(!updatingPassword)}

        }>Update Password</button>
      }
      {updatingPassword && 
        <>
          {errorMessage && <h3 className="password-reset-error-message">{errorMessage}</h3>}
          <form className="update-password" onSubmit={handlePasswordUpdate} >
            <label htmlFor="email">Please enter your email address associated with your CAPE account.</label>
            <input type="text" name="email" placeholder="email@address.org" onChange={handleInput} value={email} />
            <label htmlFor="current-password">Please enter your current password.</label>
            <input type="password" name="current-password" placeholder="Old Password" onChange={handleInput} value={currentPassword} />
            <label htmlFor="password1">Please enter your new password. Passwords must be at least 6 characters long.</label>
            <input type="password" name="password1" placeholder="password" onChange={handleInput} value={password1} />
            <label htmlFor="password2">Please enter the new password again</label>
            <input type="password" name="password2" placeholder="password" onChange={handleInput} value={password2} />
            <input type="submit" />
          </form>
        </>
      }
      {updateSucess && <h3 className="password-reset-success-message">Password Successfully Updated</h3>}
    </div>
  );
};

export default Profile;
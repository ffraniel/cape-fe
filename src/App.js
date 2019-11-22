import React, { useState, useEffect } from 'react';
import './App.css';
import fire from './config/fire';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {  

  const [user, setUser] = useState(null);

  const authListener = () => {
    fire.auth().onAuthStateChanged((newUser) => {
      if (newUser) {
        setUser(newUser);
      } else {
        setUser(null);
      };
    });
  };

  useEffect(()=>{
    authListener();
  }, [user]);

  return (
    <div className="App">
      <h1>Cape</h1>
      {user ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import fire from './config/fire';
import Index from './pages/Index';
import Dashboard from './pages/Dashboard';

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
      {user ? <Dashboard /> : <Index />}
    </div>
  );
}

export default App;

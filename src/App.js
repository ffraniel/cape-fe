import React, { useState, useEffect, lazy, Suspense } from 'react';
import './App.css';
import fire from './config/fire';
import Index from './pages/public/Index';
import Loading from './components/Loading';
const Dashboard = lazy(() => import('./pages/user/Dashboard'));

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
        <Suspense fallback={<Loading />}>
          {user ? <Dashboard /> : <Index />}
        </Suspense>
      </div>
  );
}

export default App;

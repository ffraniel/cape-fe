import React, { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import fire from "./config/fire";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Index from "./pages/public/Index";
import Loading from "./components/Loading";
const Dashboard = lazy(() => import("./pages/user/Dashboard"));

function App() {

  const auth = getAuth(fire);

  const [user, setUser] = useState(null);

  
  useEffect(() => {
    const authListener = () => {
      onAuthStateChanged(auth, (newUser) => {
        if (newUser) {
          setUser(newUser);
        } else {
          setUser(null);
        }
      });
    };
    
    authListener();
  }, [user, auth]);

  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        {user ? <Dashboard /> : <Index />}
      </Suspense>
    </div>
  );
}

export default App;

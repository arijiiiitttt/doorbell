import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import DoorbellPg from './components/main/DoorbellPg';
import Login from './components/code/Login';
import Register from './components/code/Register';
import { ToastContainer } from 'react-toastify';
import Profile from './components/main/Content';
import {auth} from "./components/code/firebase";


function Home() {
  return (
    <>
  <DoorbellPg/>
    </>
  );
}

function App() {
  const [user ,setUser] = useState();
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      setUser(user);
    });
  });
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<DoorbellPg/>} />
           <Route path="/login" element={user?<Navigate to="/profile"/>: <Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/content" element={<Profile/>} />
        </Routes>
        <ToastContainer/>
      </div>
    </Router>
  );
}

export default App;

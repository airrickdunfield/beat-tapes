import React, { useState, useEffect } from 'react';

import { Routes, Route, Navigate } from 'react-router';

import Header from './components/Header';
import Footer from './components/Footer';

import AllTapes from './pages/AllTapes';
import Tape from './pages/Tape';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import a from './App.module.css';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
      // Check if the token exists in localStorage
      const token = localStorage.getItem('token');
      if (token) {
          setIsAuthenticated(true);
      }
      
  }, []);

  return (
    
    <div className={a.app}>
      <Header />

      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/tapes" /> : <Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/tapes" element={isAuthenticated ? <AllTapes /> : <h1>ooops</h1>} />
        <Route path="/tapes/:id" element={isAuthenticated ? <Tape /> : <Navigate to="/" />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App;

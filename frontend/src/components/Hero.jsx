/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
// import Colab from "./Colab";
import Tutorial from "./Tutorial";
import Features from "./Features";
import { useState, useEffect } from 'react';

function Hero() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is already authenticated on app load
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return (
    <div>
      <Navbar  />
      <Home/>
      <Features/>
      <Tutorial/>
      <Footer />
    </div>
  );
}

export default Hero;




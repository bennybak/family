import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// import logo from './logo.svg';
// import './App.css';
import Login from './components/Login';
import Home from './components/Home'; // Your Home component
import { AuthProvider, useAuth } from './AuthContext'; // Adjust the path as needed

const App: React.FC = () => {
  const { user } = useAuth(); // Get user from context

//   const { isAuthenticated } = useAuth(); // Get authentication state from context

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Navigate to="/home" />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
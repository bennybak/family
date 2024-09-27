import React, { useState } from 'react';
import { useAuth } from '../AuthContext'; // Adjust the path as needed

import { useNavigate } from 'react-router-dom'; // Import useNavigate

const apiUrl = process.env.REACT_APP_API_URL;

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // Get the login function from context
  const navigate = useNavigate(); // Initialize useNavigate


  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Call backend API for login
    const response = await fetch(`${apiUrl}/api/login/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const userData = await response.json();
      console.log('Login successful');
      login({
          username: userData.username,
          firstName: userData.first_name,
          lastName: userData.last_name,
      });

      // Redirect to home page after successful login
      navigate('/home');
    } else {
      console.log('Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

import React, { useState } from 'react';
import '../css/Menu.css'; // Import the CSS for the menu styles
import { useAuth } from '../AuthContext'; // Import the AuthContext

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth(); // Get user and logout function from context

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="logo">
        <h1>Family Chores</h1>
      </div>
      <div className="burger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={isOpen ? 'nav-links active' : 'nav-links'}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        {user ? (
          <li><button onClick={logout}>Logout</button></li> // Show Logout if user is logged in
        ) : (
          <li><button onClick={() => alert("Login functionality not implemented")}>Login</button></li> // Placeholder for Login
        )}
      </ul>
    </nav>
  );
};

export default Menu;

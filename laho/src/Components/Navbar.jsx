// src/Components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';
// import '../Css/Navbar.css'; // Create this CSS file

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">CampusHub</div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/clubs">Clubs</Link>
          <Link to="/announcements">Announcements</Link>
          <Link to="/profile">Profile</Link>
        </nav>
        <div className="header-right">
          <button 
            className="login-btn"
            onClick={() => navigate('/login')}
          >
            Log In
          </button>
          <button 
            className="dark-mode-toggle"
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import '../Css/Home.css';
import { FiSun, FiMoon } from 'react-icons/fi';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return savedMode ? savedMode === 'true' : systemPrefersDark;
    }
    return false;
  });

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode.toString());
      return newMode;
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const elements = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 8,
      left: Math.random() * 100,
      animationType: Math.random() > 0.5 ? 'float' : 'floatReverse'
    }));
    setFloatingElements(elements);
  }, []);

  return (
    <div className={`home-page ${darkMode ? 'dark' : ''}`}>
      {/* Header Section */}
      <header className="main-header">
        <div className="header-container">
          <div className="logo">CampusHub</div>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#events">Events</a>
            <a href="#clubs">Clubs</a>
            <a href="#announcements">Announcements</a>
          </nav>
          <div className="auth-buttons">
            <button className="login-btn">Log In</button>
            <button 
              className="dark-mode-toggle"
              onClick={toggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>
            <button className="profile-btn">Profile</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="home-section">
        <div className="floating-elements">
          {floatingElements.map((element) => (
            <div 
              key={element.id}
              className="floating-element"
              style={{
                width: `${element.size}px`,
                height: `${element.size}px`,
                left: `${element.left}%`,
                top: '120%',
                animation: `${element.animationType} ${element.duration}s ${element.delay}s infinite linear`,
                opacity: Math.random() * 0.4 + 0.3
              }}
            />
          ))}
        </div>

        <div className="container">
          <div className="grid-two-cols">
            <div className="text-content">
              <h1 className="heading">
                <span>Connect with</span>
                <span className="highlight">Campus Life</span>
              </h1>
              <p className="subheading">
                Discover events, join Clubs, and stay updated with everything happening on campus.
                Your one-stop hub for student engagement and community building.
              </p>
              <div className="cta-group">
                <a 
                  href="#events" 
                  className="btn primary"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Explore Events
                  <span className="btn-icon">→</span>
                </a>
                <a 
                  href="#clubs" 
                  className="btn outline"
                >
                  Browse Clubs
                  <span className="btn-icon">↗</span>
                </a>
              </div>
            </div>

            <div className="image-wrapper">
              <div 
                className="image-container"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                  alt="Students on campus"
                  className={isHovered ? 'hover-effect' : ''}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
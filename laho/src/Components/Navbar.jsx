// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import '../App.css'; // your styles

// const NAV_ITEMS = [
//   { to: '/', label: 'Home' },
//   { to: '/events', label: 'Events' },
//   { to: '/clubs', label: 'Clubs' },
//   { to: '/announcements', label: 'Announcements' },
//   { to: '/profile', label: 'Profile' },
// ];

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const { pathname } = useLocation();

//   const toggleTheme = () => {
//     setDarkMode(prev => !prev);
//     document.documentElement.classList.toggle('dark');
//   };

//   const goToLogin = () => window.location.href = '/login';
//   const goToRegister = () => window.location.href = '/register';

//   useEffect(() => {
//     if (document.documentElement.classList.contains('dark')) {
//       setDarkMode(true);
//     }
//   }, []);

//   const isActive = (path) => path === '/'
//     ? pathname === '/'
//     : pathname.startsWith(path);

//   return (
//     <nav className="navbar">
//       <div className="container">
//         <div className="navbar-content">
//           <div className="navbar-left">
//             <i className="fas fa-university logo-icon" />
//             <span className="logo-text">CampusHub</span>
//             <div className="nav-links desktop">
//               {NAV_ITEMS.map(item => (
//                 <Link
//                   key={item.to}
//                   to={item.to}
//                   className={isActive(item.to) ? 'active' : ''}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           <div className="navbar-right desktop">
//             <button onClick={toggleTheme} className="theme-toggle">
//               <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`} />
//             </button>
//             <button onClick={goToLogin} className="btn primary">Login</button>
//             <button onClick={goToRegister} className="btn secondary">Register</button>
//           </div>

//           <div
//             className="mobile-menu-button"
//             onClick={() => setMobileMenuOpen(open => !open)}
//           >
//             <i className="fas fa-bars" />
//           </div>
//         </div>
//       </div>

//       {mobileMenuOpen && (
//         <div className="mobile-menu">
//           {NAV_ITEMS.map(item => (
//             <Link
//               key={item.to}
//               to={item.to}
//               className={isActive(item.to) ? 'active' : ''}
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               {item.label}
//             </Link>
//           ))}
//           <div className="mobile-actions">
//             <button onClick={toggleTheme} className="theme-toggle">
//               <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`} />
//             </button>
//             <button onClick={goToLogin} className="btn primary">Login</button>
//             <button onClick={goToRegister} className="btn secondary">Register</button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// src/Components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../App.css'; // make sure this includes required styles

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/events', label: 'Events' },
  { to: '/clubs', label: 'Clubs' },
  { to: '/announcements', label: 'Announcements' },
  { to: '/profile', label: 'Profile' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Check for dark mode on load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDark = document.documentElement.classList.contains('dark');
      setDarkMode(isDark);
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
    document.documentElement.classList.toggle('dark');
  };

  const isActive = (path) => (
    path === '/' ? pathname === '/' : pathname.startsWith(path)
  );

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          {/* Logo and Nav Links */}
          <div className="navbar-left">
            <i className="fas fa-university logo-icon" />
            <span className="logo-text">CampusHub</span>

            <div className="nav-links desktop">
              {NAV_ITEMS.map(item => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={isActive(item.to) ? 'active' : ''}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Buttons (desktop) */}
          <div className="navbar-right desktop">
            <button onClick={toggleTheme} className="theme-toggle">
              <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`} />
            </button>
            <button onClick={() => navigate('/login')} className="btn primary">Login</button>
            <button onClick={() => navigate('/register')} className="btn secondary">Register</button>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(open => !open)}
            aria-label="Toggle mobile menu"
          >
            <i className="fas fa-bars" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {NAV_ITEMS.map(item => (
            <button
              key={item.to}
              onClick={() => handleNavigation(item.to)}
              className={`mobile-link ${isActive(item.to) ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}

          <div className="mobile-actions">
            <button onClick={toggleTheme} className="theme-toggle">
              <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`} />
            </button>
            <button onClick={() => handleNavigation('/login')} className="btn primary">Login</button>
            <button onClick={() => handleNavigation('/register')} className="btn secondary">Register</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

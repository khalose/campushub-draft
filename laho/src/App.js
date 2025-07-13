// // src/App.jsx
// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import Landing from './Components/Landing';
// import LoginPage from './Pages/LoginPage';
// import RegisterPage from './Pages/RegisterPage';
// import Events from './Components/Events';
// import ClubsPage from './Pages/ClubsPage';
// import AnnouncementsPage from './Pages/AnnouncementsPage';
// import Dashboard from './Components/Dashboard';
// import ProfilePage from './Pages/ProfilePage';
// import RSVPDashboard from './Components/RsvpDashboard';

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         {/* Landing page with all sections in one scrollable view */}
//         <Route path="/" element={<Landing />} />

//         {/* Dedicated pages */}
//         <Route path="/home" element={<Landing />} />
//         <Route path="/events" element={<Events />} />
//         <Route path="/clubs"  element={<ClubsPage />} />
//         <Route path="/announcements" element={<AnnouncementsPage />} />
//         <Route path="/profile" element={<ProfilePage />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/rsvp" element={<RSVPDashboard />} />

//         {/* Auth routes */}
//         <Route path="/login"  element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />

//         {/* Redirect any unknown path back to home */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import Events from './Components/Events';
import ClubsPage from './Pages/ClubsPage';
import AnnouncementsPage from './Pages/AnnouncementsPage';
import Dashboard from './Components/Dashboard';
import ProfilePage from './Pages/ProfilePage';
import RSVPDashboard from './Components/RsvpDashboard';
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard';
import Clubs from './Pages/Clubs';
import Events from './Pages/Events';




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/events" element={<Events />} />
        <Route path="/clubs" element={<ClubsPage />} />
        <Route path="/announcements" element={<AnnouncementsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rsvp" element={<RSVPDashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/dashboard" element={<><Sidebar /><Dashboard /></>} />
        <Route path="/clubs" element={<><Sidebar /><Clubs /></>} />
        <Route path="/events" element={<><Sidebar /><Events /></>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

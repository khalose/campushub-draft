import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import AuthCard from './Pages/AuthCard'; // Changed from LoginPage
import Events from './Components/Events';
import ClubsPage from './Pages/ClubsPage';
import AnnouncementsPage from './Pages/AnnouncementsPage';
import Dashboard from './Components/Dashboard';
import ProfilePage from './Pages/ProfilePage';
import RSVPDashboard from './Components/RsvpDashboard';
import Sidebar from './Components/Sidebar';
import DashboardPage from './Pages/Dashboard';
import Clubs from './Pages/Clubs';
import EventsPage from './Pages/Events';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/events" element={<Events />} />
        <Route path="/clubs" element={<ClubsPage />} />
        <Route path="/announcements" element={<AnnouncementsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rsvp" element={<RSVPDashboard />} />
        
        {/* Auth routes - now using AuthCard */}
        <Route path="/login" element={<AuthCard initialView="login" />} />
        <Route path="/register" element={<AuthCard initialView="register" />} />
        
        {/* Dashboard routes with sidebar */}
        <Route path="/dashboard" element={<><Sidebar /><DashboardPage /></>} />
        <Route path="/clubs" element={<><Sidebar /><Clubs /></>} />
        <Route path="/events" element={<><Sidebar /><EventsPage /></>} />

        {/* Redirect any unknown path back to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
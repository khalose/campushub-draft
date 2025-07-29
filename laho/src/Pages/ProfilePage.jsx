import React, { useState } from 'react';
import AuthCard from './AuthCard';
import '../Css/Profile.css';

export default function Profile() {
  const [mode, setMode] = useState('login'); // 'login' or 'register'

  return (
    <div className="profile-container">
      <div className="profile-tabs">
        <button
          className={mode === 'login' ? 'tab active' : 'tab'}
          onClick={() => setMode('login')}
        >
          Login
        </button>
        <button
          className={mode === 'register' ? 'tab active' : 'tab'}
          onClick={() => setMode('register')}
        >
          Register
        </button>
      </div>
      <div className="profile-content">
        <AuthCard initialView={mode} />
      </div>
    </div>
  );
}
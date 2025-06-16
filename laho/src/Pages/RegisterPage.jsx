import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Css/RegisterPage.css';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState(0);
  const [role, setRole] = useState('student');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const pass = document.getElementById('registerPassword')?.value || '';
    setStrength(computeStrength(pass));
  }, [role]);

  const computeStrength = (pass) => {
    let s = 0;
    if (pass.length >= 8) s += 25;
    if (/[A-Z]/.test(pass)) s += 25;
    if (/[0-9]/.test(pass)) s += 25;
    if (/[^A-Za-z0-9]/.test(pass)) s += 25;
    return s;
  };

  const handlePasswordInput = e => {
    const pass = e.target.value;
    setStrength(computeStrength(pass));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Account created! Please log in.');
    }, 2000);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <h1>Create Your Account</h1>
          <p>Join Campus Connect today</p>
        </div>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-row">
            <input name="firstName" placeholder="First Name" required />
            <input name="lastName" placeholder="Last Name" required />
          </div>
          <div className="form-group icon-input">
            <i className="fas fa-envelope" />
            <input name="email" type="email" placeholder="Email Address" required />
          </div>
          <div className="form-group icon-input">
            <i className="fas fa-phone" />
            <input name="phone" type="tel" placeholder="Phone Number" />
          </div>
          <div className="form-group icon-input">
            <i className="fas fa-lock" />
            <input
              id="registerPassword"
              type={showPassword ? 'text' : 'password'}
              onInput={handlePasswordInput}
              placeholder="Create a password"
              required
            />
            <i
              className={`toggle-password fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
              onClick={() => setShowPassword(v => !v)}
            />
          </div>
          <div className="password-strength">
            <div
              className="password-strength-bar"
              style={{
                width: `${strength}%`,
                backgroundColor: strength < 50 ? '#ef4444' : strength < 75 ? '#f59e0b' : '#10b981'
              }}
            />
          </div>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            required
          />
          <div className="role-select">
            <span>Select Your Role</span>
            <div className="role-options">
              {['student', 'club-rep', 'admin'].map(r => (
                <label key={r} className={`role-option ${role === r ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="role"
                    value={r}
                    checked={role === r}
                    onChange={() => setRole(r)}
                  />
                  <i className={`fas ${
                    r === 'student' ? 'fa-user-graduate' :
                    r === 'club-rep' ? 'fa-users' :
                    'fa-user-shield'
                  }`} />
                  <span>{r === 'club-rep' ? 'Club Rep' : r.charAt(0).toUpperCase() + r.slice(1)}</span>
                </label>
              ))}
            </div>
          </div>
          {role === 'club-rep' && (
            <div className="form-group">
              <input name="clubName" placeholder="Club Name" />
              <input name="clubCode" placeholder="Club Access Code (optional)" />
            </div>
          )}
          <label className="checkbox-label">
            <input type="checkbox" required />
            <span>I agree to the Terms & Conditions</span>
          </label>
          <button type="submit" disabled={loading}>
            {loading ? <i className="fas fa-spinner fa-spin" /> : 'Create Account'}
          </button>
          <p className="footer-link">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

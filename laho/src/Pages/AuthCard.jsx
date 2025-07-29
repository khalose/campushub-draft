import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUserGraduate, FaUsers, FaUserShield, FaSpinner } from 'react-icons/fa';
import '../Css/AuthCard.css';

export default function AuthCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState(0);
  const [role, setRole] = useState('student');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const computeStrength = (pass) => {
    let s = 0;
    if (pass.length >= 8) s += 25;
    if (/[A-Z]/.test(pass)) s += 25;
    if (/[0-9]/.test(pass)) s += 25;
    if (/[^A-Za-z0-9]/.test(pass)) s += 25;
    return s;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const role = e.target.loginRole.value;
      if (role === 'student') navigate('/dashboard/student');
      else if (role === 'club-rep') navigate('/dashboard/club');
      else navigate('/dashboard/admin');
    }, 2000);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsFlipped(false);
      alert('Account created! Please log in.');
    }, 2000);
  };

  return (
    <div className="auth-container">
      <div className={`auth-card ${isFlipped ? 'flipped' : ''}`}>
        {/* Login Side */}
        <div className="auth-side front">
          <div className="auth-header">
            <h1>Welcome Back</h1>
            <p>Login to your Campus Connect account</p>
          </div>
          <form onSubmit={handleLogin} className="auth-form">
            <div className="form-group icon-input">
              <FaEnvelope className="input-icon" />
              <input name="email" type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group icon-input">
              <FaLock className="input-icon" />
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                required
              />
              {showPassword ? (
                <FaEyeSlash 
                  className="toggle-password" 
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <FaEye 
                  className="toggle-password" 
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
            <div className="form-options">
              <label>
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
            <div className="form-group">
              <label htmlFor="loginRole">Select Role</label>
              <select name="loginRole" id="loginRole">
                <option value="student">Student</option>
                <option value="club-rep">Club Representative</option>
                <option value="admin">Administrator</option>
              </select>
            </div>
            <button type="submit" className="auth-button" disabled={loading}>
              {loading ? <FaSpinner className="spinner" /> : 'Login'}
            </button>
            <p className="auth-footer">
              Don't have an account?{' '}
              <button 
                type="button" 
                className="switch-mode"
                onClick={() => setIsFlipped(true)}
              >
                Sign up here
              </button>
            </p>
          </form>
        </div>

        {/* Register Side */}
        <div className="auth-side back">
          <div className="auth-header">
            <h1>Create Account</h1>
            <p>Join Campus Connect today</p>
          </div>
          <form onSubmit={handleRegister} className="auth-form">
            <div className="form-row">
              <input name="firstName" placeholder="First Name" required />
              <input name="lastName" placeholder="Last Name" required />
            </div>
            <div className="form-group icon-input">
              <FaEnvelope className="input-icon" />
              <input name="email" type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group icon-input">
              <FaLock className="input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                onInput={(e) => setStrength(computeStrength(e.target.value))}
                placeholder="Create a password"
                required
              />
              {showPassword ? (
                <FaEyeSlash 
                  className="toggle-password" 
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <FaEye 
                  className="toggle-password" 
                  onClick={() => setShowPassword(true)}
                />
              )}
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
                    {r === 'student' ? (
                      <FaUserGraduate className="role-icon" />
                    ) : r === 'club-rep' ? (
                      <FaUsers className="role-icon" />
                    ) : (
                      <FaUserShield className="role-icon" />
                    )}
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
            <button type="submit" className="auth-button" disabled={loading}>
              {loading ? <FaSpinner className="spinner" /> : 'Create Account'}
            </button>
            <p className="auth-footer">
              Already have an account?{' '}
              <button 
                type="button" 
                className="switch-mode"
                onClick={() => setIsFlipped(false)}
              >
                Login here
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
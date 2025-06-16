import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../Css/LoginPage.css'; // import the CSS

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = e => {
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

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Campus Connect</h1>
          <p>Your gateway to campus life</p>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group icon-input">
            <i className="fas fa-envelope"></i>
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-group icon-input">
            <i className="fas fa-lock"></i>
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              required
            />
            <i
              className={`toggle-password fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
              onClick={() => setShowPassword(v => !v)}
            />
          </div>
          <div className="form-options">
            <label>
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <div className="form-group">
            <label htmlFor="loginRole">Select Role</label>
            <select name="loginRole" id="loginRole">
              <option value="student">Student</option>
              <option value="club-rep">Club Representative</option>
              <option value="admin">Administrator</option>
            </select>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? <i className="fas fa-spinner fa-spin"></i> : 'Login'}
          </button>
          <p className="footer-link">
            Don't have an account?{' '}
            <Link to="/register">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

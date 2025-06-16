// Dashboard.jsx
import React, { useState, useEffect, useRef } from 'react';
import '../Css/Dashboard.css';
import Chart from 'chart.js/auto';

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const attendanceRef = useRef(null);
  const membershipRef = useRef(null);

  useEffect(() => {
    // Initialize attendance chart
    if (attendanceRef.current) {
      new Chart(attendanceRef.current, {
        type: 'line',
        data: {
          labels: ['Jan','Feb','Mar','Apr','May','Jun'],
          datasets: [{
            label: 'Attendance',
            data: [120,190,170,220,250,210],
            backgroundColor: 'rgba(79,70,229,0.1)',
            borderColor: 'rgba(79,70,229,1)',
            borderWidth: 2,
            tension: 0.3,
            fill: true
          }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins:{ legend:{ display:false } }, scales:{ y:{ beginAtZero:true } } }
      });
    }
    // Initialize membership chart
    if (membershipRef.current) {
      new Chart(membershipRef.current, {
        type: 'bar',
        data: {
          labels: ['Science','Arts','Sports','Tech','Cultural'],
          datasets: [{
            label: 'Members',
            data: [320,180,240,420,290],
            backgroundColor: ['rgba(79,70,229,0.7)','rgba(99,102,241,0.7)','rgba(129,140,248,0.7)','rgba(167,139,250,0.7)','rgba(196,181,253,0.7)'],
            borderColor: ['rgba(79,70,229,1)','rgba(99,102,241,1)','rgba(129,140,248,1)','rgba(167,139,250,1)','rgba(196,181,253,1)'],
            borderWidth: 1
          }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins:{ legend:{ display:false } }, scales:{ y:{ beginAtZero:true } } }
      });
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const count = Math.floor(Math.random()*100) + 50;
      document.querySelectorAll('.online-count').forEach(el => el.textContent = count);
    },5000);
    return () => clearInterval(interval);
  }, []);

  const menuItems = [
    { icon:'tachometer-alt', label:'Dashboard' },
    { icon:'calendar-day', label:'Events' },
    { icon:'users', label:'Clubs' },
    { icon:'bullhorn', label:'Announcements' },
    { icon:'user-cog', label:'Users' },
    { icon:'comments', label:'Chat' },
    { icon:'envelope', label:'RSVPs' }
  ];

  return (
    <div className="dashboard-container">
      <aside className={collapsed ? 'sidebar collapsed' : 'sidebar'}>
        <div className="logo">
          <i className="fas fa-calendar-alt" />
          {!collapsed && <h2>CampusHub</h2>}
        </div>
        <nav>
          {menuItems.map((item,i) => (
            <a key={i} href="#" className="menu-item">
              <i className={`fas fa-${item.icon}`} />
              {!collapsed && <span>{item.label}</span>}
            </a>
          ))}
        </nav>
        <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
          <i className="fas fa-bars" />
        </button>
      </aside>

      <div className="main-area">
        <header className="header">
          <h1>Dashboard Overview</h1>
          <div className="header-controls">
            <div className="search-box">
              <i className="fas fa-search" />
              <input type="text" placeholder="Search..." />
            </div>
            <div className="notification">
              <i className="fas fa-bell" />
              <span className="badge">3</span>
            </div>
            <div className="profile">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Admin" />
              <span>Admin User</span>
            </div>
          </div>
        </header>

        <main className="content">
          <section className="stats-grid">
            <div className="stat-card">
              <p>Total Events</p><h3>142</h3><small>+12% from last month</small>
            </div>
            <div className="stat-card">
              <p>Active Clubs</p><h3>36</h3><small>+3 new this month</small>
            </div>
            <div className="stat-card">
              <p>Users</p><h3>2,847</h3><small>+124 signups</small>
            </div>
            <div className="stat-card">
              <p>RSVPs</p><h3>1,924</h3><small>+312 this week</small>
            </div>
          </section>

          <section className="charts">
            <div className="chart-card">
              <h3>Attendance Trends</h3>
              <canvas ref={attendanceRef}></canvas>
            </div>
            <div className="chart-card">
              <h3>Membership Growth</h3>
              <canvas ref={membershipRef}></canvas>
            </div>
          </section>

          <section className="activity-events">
            <div className="activity">
              <h3>Recent Activity</h3>
              <ul>
                <li><i className="fas fa-calendar-plus"></i> New event created <span>2h ago</span></li>
                <li><i className="fas fa-user-plus"></i> New club approved <span>5h ago</span></li>
                <li><i className="fas fa-comment-dots"></i> Chat flagged <span>Yesterday</span></li>
              </ul>
            </div>
            <div className="upcoming">
              <h3>Upcoming Events</h3>
              <table>
                <thead><tr><th>Event</th><th>Date</th><th>RSVPs</th><th>Status</th></tr></thead>
                <tbody>
                  <tr><td>Science Fair</td><td>May 15, 2023</td><td>247/300</td><td>Active</td></tr>
                  <tr><td>Music Fest</td><td>May 17, 2023</td><td>189/500</td><td>Active</td></tr>
                  <tr><td>Debate Comp</td><td>May 18, 2023</td><td>56/100</td><td>Pending</td></tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
);
}
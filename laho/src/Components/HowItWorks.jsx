import React from 'react';
import '../Css/HowItWorks.css'; // path to your CSS

const steps = [
  {
    id: 1,
    icon: 'fas fa-user-plus',
    title: 'Create an Account',
    description: 'Sign up with your student email to access all features of CampusHub.',
  },
  {
    id: 2,
    icon: 'fas fa-search',
    title: 'Explore Opportunities',
    description: 'Browse events and clubs that match your interests and schedule.',
  },
  {
    id: 3,
    icon: 'fas fa-calendar-check',
    title: 'Get Involved',
    description: 'RSVP to events, join clubs, and connect with other students.',
  },
];

const HowItWorks = () => (
  <div>
    {/* How It Works Section */}
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="header">
          <h2>How It Works</h2>
          <p>Getting involved on campus has never been easier.</p>
        </div>
        <div className="steps-grid">
          {steps.map(step => (
            <div key={step.id} className="step-card">
              <div className="icon-circle">
                <i className={step.icon}></i>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Upcoming Events Section */}
    <section id="events" className="events-section">
      <div className="container">
        <div className="events-header">
          <div>
            <h2>Upcoming Events</h2>
            <p>Discover and participate in exciting campus activities</p>
          </div>
          <div className="events-controls">
            <div className="select-wrapper">
              <select>
                <option>All Categories</option>
                <option>Academic</option>
                <option>Social</option>
                <option>Sports</option>
                <option>Arts</option>
                <option>Career</option>
              </select>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="select-wrapper">
              <select>
                <option>This Month</option>
                <option>Today</option>
                <option>This Week</option>
                <option>Next Month</option>
              </select>
              <i className="fas fa-chevron-down"></i>
            </div>
            <button className="btn create-event">
              <i className="fas fa-plus"></i> Create Event
            </button>
          </div>
        </div>

        <div className="events-main-grid">
          {/* Calendar View */}
          <div className="calendar-view">
            <div className="calendar-header">
              <h3>May 2023</h3>
              <div>
                <button><i className="fas fa-chevron-left"></i></button>
                <button className="today-btn">Today</button>
                <button><i className="fas fa-chevron-right"></i></button>
              </div>
            </div>
            <div className="calendar-grid">
              {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
                <div key={d} className="calendar-day-name">{d}</div>
              ))}
              {Array.from({ length: 35 }).map((_, i) => {
                const day = i - 4; // offset so that 1 falls on Fri (index 4)
                const isEventDay = day === 15 || day === 18 || day === 22;
                const eventTitle = day === 15
                  ? 'Spring Music Festival'
                  : day === 18
                    ? 'AI & Future of Work'
                    : day === 22
                      ? 'Annual Career Fair'
                      : '';
                const colorClass = day === 22 ? 'career' : isEventDay ? 'primary' : '';
                return (
                  <div key={i} className={`calendar-cell ${colorClass}`}>
                    {day > 0 && day <= 31 ? (
                      <>
                        <div className="date-number">{day}</div>
                        {isEventDay && (
                          <div className="event-label">{eventTitle}</div>
                        )}
                      </>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Today's Events List */}
          <div className="today-events">
            <div className="today-header">
              <h3>Today's Events</h3>
            </div>
            <div className="today-list">
              {[
                {
                  date: 15,
                  month: 'MAY',
                  title: 'Spring Music Festival',
                  time: '6:00 PM - 9:00 PM',
                  location: 'Main Quad',
                  category: 'Music',
                  categoryClass: 'primary',
                },
                {
                  date: 18,
                  month: 'MAY',
                  title: 'AI & Future of Work',
                  time: '4:00 PM - 6:00 PM',
                  location: 'Engineering Building 101',
                  category: 'Tech',
                  categoryClass: 'secondary',
                },
                {
                  date: 22,
                  month: 'MAY',
                  title: 'Annual Career Fair',
                  time: '10:00 AM - 4:00 PM',
                  location: 'Student Union Ballroom',
                  category: 'Career',
                  categoryClass: 'career',
                },
              ].map((evt, idx) => (
                <div key={idx} className="today-item">
                  <div className={`date-badge ${evt.categoryClass}`}>
                    <div className="day">{evt.date}</div>
                    <div className="mon">{evt.month}</div>
                  </div>
                  <div className="today-info">
                    <h4>{evt.title}</h4>
                    <p><i className="far fa-clock"></i> {evt.time}</p>
                    <p><i className="fas fa-map-marker-alt"></i> {evt.location}</p>
                    <div className="today-footer">
                      <span className={`tag ${evt.categoryClass}`}>{evt.category}</span>
                      <button className="btn rsvp">RSVP</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="view-all-link">
              <a href="#">View all upcoming events</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default HowItWorks;

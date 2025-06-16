import React from 'react';
import '../Css/UpcomingEvents.css'; // Ensure you have the correct path to your CSS file

const events = [
  {
    id: 1,
    category: 'Music',
    categoryColor: 'primary',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    dateTime: 'May 15, 2023 • 6:00 PM',
    title: 'Spring Music Festival',
    description: 'Join us for an evening of live music featuring our talented student performers.',
    location: 'Main Quad',
  },
  {
    id: 2,
    category: 'Tech',
    categoryColor: 'secondary',
    imageUrl: 'https://images.unsplash.com/photo-1551282102-0a5c7bdf7856?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    dateTime: 'May 18, 2023 • 4:00 PM',
    title: 'AI & Future of Work',
    description: 'Industry leaders discuss how artificial intelligence is transforming the workplace.',
    location: 'Engineering Building 101',
  },
  {
    id: 3,
    category: 'Career',
    categoryColor: 'yellow',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    dateTime: 'May 22, 2023 • 10:00 AM',
    title: 'Annual Career Fair',
    description: 'Connect with top employers and explore internship and job opportunities.',
    location: 'Student Union Ballroom',
  },
];

const UpcomingEvents = () => (
  <section id="upcoming-events" className="upcoming-events">
    <div className="container">
      <div className="header">
        <h2>Upcoming Events</h2>
        <p>Don't miss out on these exciting campus events happening soon.</p>
      </div>

      <div className="events-grid">
        {events.map(evt => (
          <div key={evt.id} className="event-card">
            <div className="image-wrapper">
              <img src={evt.imageUrl} alt={evt.title} />
              <span className={`category-label ${evt.categoryColor}`}>
                {evt.category}
              </span>
            </div>
            <div className="card-body">
              <div className="datetime">
                <i className="far fa-calendar-alt"></i>
                <span>{evt.dateTime}</span>
              </div>
              <h3 className="event-title">{evt.title}</h3>
              <p className="event-desc">{evt.description}</p>
              <div className="card-footer">
                <span className="location">
                  <i className="fas fa-map-marker-alt"></i>
                  {evt.location}
                </span>
                <button className="btn rsvp">RSVP</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all">
        <a href="#events" className="btn view-all-btn">
          View All Events <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </section>
);

export default UpcomingEvents;

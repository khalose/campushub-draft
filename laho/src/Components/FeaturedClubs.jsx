import React from 'react';
import '../Css/FeaturedClubs.css'; // Ensure you have the correct path to your CSS file

const clubs = [
  {
    id: 1,
    name: 'Robotics Club',
    icon: 'fas fa-robot',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    meetingInfo: 'Meets every Wednesday at 5PM in the Engineering Building',
    description: 'Building innovative robots and competing in national competitions.',
    tags: ['Engineering', 'Competitive', 'STEM'],
  },
  {
    id: 2,
    name: 'Music Society',
    icon: 'fas fa-music',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80',
    meetingInfo: 'Meets every Tuesday at 7PM in the Music Hall',
    description: 'For musicians and music lovers to collaborate and perform.',
    tags: ['Arts', 'Performance', 'Creative'],
  },
  {
    id: 3,
    name: 'Debate Team',
    icon: 'fas fa-comments',
    imageUrl: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    meetingInfo: 'Meets every Thursday at 6PM in the Humanities Building',
    description: 'Sharpen your public speaking and critical thinking skills.',
    tags: ['Academic', 'Competitive', 'Leadership'],
  },
  {
    id: 4,
    name: 'Green Campus',
    icon: 'fas fa-leaf',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80',
    meetingInfo: 'Meets every Monday at 5PM in the Science Center',
    description: 'Promoting sustainability and environmental awareness on campus.',
    tags: ['Sustainability', 'Activism', 'Community'],
  },
];

const FeaturedClubs = () => (
  <section id="featured-clubs" className="featured-clubs">
    <div className="container">
      <div className="header">
        <h2>Featured Clubs</h2>
        <p>Join one of our vibrant student organizations and find your community.</p>
      </div>

      <div className="clubs-grid">
        {clubs.map(club => (
          <div key={club.id} className="club-card group">
            <div className="image-wrapper">
              <img src={club.imageUrl} alt={club.name} />
              <div className="club-overlay">
                <p>{club.meetingInfo}</p>
                <div className="buttons">
                  <button className="btn join">Join Club</button>
                  <button className="btn learn">Learn More</button>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="club-header">
                <div className="icon-wrapper">
                  <i className={club.icon}></i>
                </div>
                <h3>{club.name}</h3>
              </div>
              <p className="desc">{club.description}</p>
              <div className="tags">
                {club.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all">
        <a href="#clubs" className="btn browse-all">
          Browse All Clubs <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </section>
);

export default FeaturedClubs;

import React from 'react';
import '../Css/ClubSection.css'; // Ensure you have the correct path to your CSS file

const sampleClubs = [
  {
    id: 1,
    name: 'Photography Club',
    icon: 'fas fa-camera',
    imageUrl: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
    meetingInfo: 'Meets every Friday at 4PM in the Arts Center',
    description: 'For photography enthusiasts to share techniques and organize photo walks.',
    tags: ['Arts', 'Creative', 'Photography']
  },
  // ...additional club objects here...
];

const ClubSection = () => (
  <section id="clubs" className="clubs-section">
    <div className="container">
      <div className="clubs-header">
        <div>
          <h2>Student Clubs</h2>
          <p>Find your community among our diverse student organizations</p>
        </div>
        <div className="clubs-controls">
          <div className="search-wrapper">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search clubs..."
              id="club-search"
            />
          </div>
          <div className="select-wrapper">
            <select id="club-category">
              <option value="">All Categories</option>
              <option>Academic</option>
              <option>Arts</option>
              <option>Cultural</option>
              <option>Sports</option>
              <option>Service</option>
              <option>STEM</option>
              <option>Social</option>
            </select>
            <i className="fas fa-chevron-down"></i>
          </div>
          <button className="btn create-club">
            <i className="fas fa-plus"></i> Create Club
          </button>
        </div>
      </div>

      <div className="clubs-grid">
        {sampleClubs.map(club => (
          <div key={club.id} className="club-card">
            <div className="image-wrapper">
              <img src={club.imageUrl} alt={club.name} />
              <div className="club-overlay">
                <p>{club.meetingInfo}</p>
                <div className="overlay-buttons">
                  <button className="btn join">Join Club</button>
                  <button className="btn learn">Learn More</button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="club-title">
                <div className="icon-circle">
                  <i className={club.icon}></i>
                </div>
                <h3>{club.name}</h3>
              </div>
              <p className="club-desc">{club.description}</p>
              <div className="tags">
                {club.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button className="page-btn">Previous</button>
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
        <button className="page-btn">Next</button>
      </div>
    </div>
  </section>
);

export default ClubSection;

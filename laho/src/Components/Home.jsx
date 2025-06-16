import React from 'react';
import '../Css/Home.css'; // Ensure you have the correct path to your CSS file

const Home = () => (
  <section id="home" className="home-section">
    <div className="container">
      <div className="grid-two-cols">
        <div className="text-content">
          <h1 className="heading">
            <span>Connect with</span>
            <span className="highlight">Campus Life</span>
          </h1>
          <p className="subheading">
            Discover events, join clubs, and stay updated with everything happening on campus.
            Your one-stop hub for student engagement and community building.
          </p>
          <div className="cta-group">
            <a href="#events" className="btn primary">
              Explore Events
            </a>
            <a href="#clubs" className="btn outline">
              Browse Clubs
            </a>
          </div>
        </div>

        <div className="image-wrapper">
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
              alt="Students on campus"
            />
            <div className="gradient-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;

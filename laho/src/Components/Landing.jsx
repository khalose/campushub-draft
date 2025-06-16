// // src/Components/Landing.jsx
// import React from 'react';
// import Home from './Home';
// import UpcomingEvents from './UpcomingEvents';
// import FeaturedClubs from './FeaturedClubs';
// import HowItWorks from './HowItWorks';
// import ClubSection from './ClubSection';

// export default function Landing() {
//   return (
//     <>
//       <Home />
//       <UpcomingEvents />
//       <FeaturedClubs />
//       <HowItWorks />
//       <ClubSection />
//     </>
//   );
// }


// src/Components/Landing.jsx
import React from 'react';
import Home from './Home';
import UpcomingEvents from './UpcomingEvents';
import FeaturedClubs from './FeaturedClubs';
import HowItWorks from './HowItWorks';
import ClubSection from './ClubSection';

export default function Landing() {
  return (
    <main>
      <section id="home">
        <Home />
      </section>

      <section id="events">
        <UpcomingEvents />
      </section>

      <section id="featured-clubs">
        <FeaturedClubs />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="clubs">
        <ClubSection />
      </section>
    </main>
  );
}

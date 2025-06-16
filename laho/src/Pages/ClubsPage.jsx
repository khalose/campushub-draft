import React, { useState, useEffect, useRef } from 'react';
import '../Css/ClubsPage.css'; // path to your CSS

const CLUBS = [
            {
                id: 1,
                name: "Tech Innovators",
                logo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                banner: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                category: "Technology",
                description: "A community of tech enthusiasts passionate about innovation, coding, and emerging technologies. We host hackathons, workshops, and networking events with industry professionals.",
                shortDescription: "For tech enthusiasts passionate about innovation and coding",
                members: 145,
                tags: ["Tech", "Coding", "Innovation"],
                officers: [
                    { name: "Alex Johnson", role: "President", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
                    { name: "Sarah Chen", role: "Vice President", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
                    { name: "Michael Brown", role: "Treasurer", avatar: "https://randomuser.me/api/portraits/men/22.jpg" }
                ],
                socials: {
                    instagram: "@techinnovators",
                    facebook: "facebook.com/techinnovators",
                    email: "tech@university.edu"
                },
                gallery: [
                    "https://images.unsplash.com/photo-1517430816045-df4b7ebf5431?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1517430816045-df4b7ebf5431?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                ],
                upcomingEvents: [
                    { title: "Annual Hackathon", date: "2023-11-15", time: "10:00 AM" },
                    { title: "Guest Speaker: AI Ethics", date: "2023-11-22", time: "4:00 PM" }
                ]
            },
            {
                id: 2,
                name: "Global Cultures",
                logo: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                banner: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                category: "Cultural",
                description: "Celebrating diversity on campus through cultural exchange, language practice, and international cuisine. We organize cultural nights, language tables, and study abroad information sessions.",
                shortDescription: "Celebrating diversity through cultural exchange and events",
                members: 89,
                tags: ["Cultural", "International", "Diversity"],
                officers: [
                    { name: "Maria Garcia", role: "President", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
                    { name: "James Wilson", role: "Event Coordinator", avatar: "https://randomuser.me/api/portraits/men/43.jpg" }
                ],
                socials: {
                    instagram: "@globalcultures",
                    email: "cultures@university.edu"
                },
                gallery: [
                    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                ],
                upcomingEvents: [
                    { title: "International Food Fair", date: "2023-11-10", time: "12:00 PM" }
                ]
            },
            {
                id: 3,
                name: "Environmental Society",
                logo: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                banner: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                category: "Service",
                description: "Dedicated to promoting sustainability on campus and in the local community. We organize cleanups, tree planting, and advocate for environmentally friendly policies.",
                shortDescription: "Promoting sustainability on campus and in the community",
                members: 112,
                tags: ["Environment", "Sustainability", "Activism"],
                officers: [
                    { name: "Taylor Green", role: "President", avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
                    { name: "Jordan Smith", role: "Outreach Coordinator", avatar: "https://randomuser.me/api/portraits/men/55.jpg" }
                ],
                socials: {
                    twitter: "@envsociety",
                    email: "environment@university.edu"
                },
                gallery: [
                    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                ],
                upcomingEvents: [
                    { title: "Campus Cleanup Day", date: "2023-11-05", time: "9:00 AM" },
                    { title: "Sustainability Workshop", date: "2023-11-18", time: "3:00 PM" }
                ]
            },
            {
                id: 4,
                name: "Photography Club",
                logo: "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                banner: "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                category: "Arts",
                description: "For photography enthusiasts of all skill levels. We organize photo walks, workshops, and exhibitions. Club members get access to our equipment lending library.",
                shortDescription: "For photography enthusiasts of all skill levels",
                members: 67,
                tags: ["Photography", "Art", "Workshops"],
                officers: [
                    { name: "Emma Wilson", role: "President", avatar: "https://randomuser.me/api/portraits/women/28.jpg" },
                    { name: "David Kim", role: "Workshop Leader", avatar: "https://randomuser.me/api/portraits/men/12.jpg" }
                ],
                socials: {
                    instagram: "@univphotoclub",
                    flickr: "flickr.com/univphotoclub",
                    email: "photo@university.edu"
                },
                gallery: [
                    "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                ],
                upcomingEvents: [
                    { title: "Night Photography Workshop", date: "2023-11-08", time: "7:00 PM" },
                    { title: "Fall Photo Exhibition", date: "2023-11-25", time: "6:00 PM" }
                ]
            },
            {
                id: 5,
                name: "Debate Society",
                logo: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                banner: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                category: "Academic",
                description: "Develop your public speaking and critical thinking skills through competitive debate. We host weekly meetings, tournaments, and public debates on current issues.",
                shortDescription: "Develop public speaking and critical thinking skills",
                members: 53,
                tags: ["Debate", "Public Speaking", "Politics"],
                officers: [
                    { name: "Robert Chen", role: "President", avatar: "https://randomuser.me/api/portraits/men/41.jpg" },
                    { name: "Sophia Martinez", role: "Tournament Director", avatar: "https://randomuser.me/api/portraits/women/63.jpg" }
                ],
                socials: {
                    email: "debate@university.edu"
                },
                gallery: [
                    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                ],
                upcomingEvents: [
                    { title: "Weekly Debate Meeting", date: "2023-11-03", time: "6:00 PM" },
                    { title: "Intercollegiate Debate Tournament", date: "2023-11-20", time: "9:00 AM" }
                ]
            },
            {
                id: 6,
                name: "Ultimate Frisbee",
                logo: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                banner: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                category: "Sports",
                description: "Competitive and recreational ultimate frisbee for all skill levels. We have men's, women's, and mixed teams that compete regionally, plus casual pickup games.",
                shortDescription: "Competitive and recreational ultimate frisbee teams",
                members: 42,
                tags: ["Sports", "Frisbee", "Recreation"],
                officers: [
                    { name: "Chris Taylor", role: "Captain", avatar: "https://randomuser.me/api/portraits/men/29.jpg" },
                    { name: "Jamie Lee", role: "Co-Captain", avatar: "https://randomuser.me/api/portraits/women/37.jpg" }
                ],
                socials: {
                    instagram: "@ultimatefrisbee",
                    email: "frisbee@university.edu"
                },
                gallery: [
                    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                ],
                upcomingEvents: [
                    { title: "Pickup Game", date: "2023-11-07", time: "4:00 PM" },
                    { title: "Regional Tournament", date: "2023-11-12", time: "8:00 AM" }
                ]
            },
            {
                id: 7,
                name: "Entrepreneurship Club",
                logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                banner: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                category: "Business",
                description: "For students interested in startups, business, and innovation. We host pitch competitions, founder talks, and provide resources for student entrepreneurs.",
                shortDescription: "For students interested in startups and business",
                members: 78,
                tags: ["Business", "Startups", "Innovation"],
                officers: [
                    { name: "Daniel Park", role: "President", avatar: "https://randomuser.me/api/portraits/men/67.jpg" },
                    { name: "Natalie Wong", role: "VP of Events", avatar: "https://randomuser.me/api/portraits/women/72.jpg" }
                ],
                socials: {
                    linkedin: "linkedin.com/company/entrepreneurship-club",
                    email: "entrepreneurs@university.edu"
                },
                gallery: [
                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                ],
                upcomingEvents: [
                    { title: "Startup Pitch Night", date: "2023-11-09", time: "5:30 PM" },
                    { title: "Founder Fireside Chat", date: "2023-11-16", time: "6:00 PM" }
                ]
            },
            {
                id: 8,
                name: "Music Ensemble",
                logo: "https://images.unsplash.com/photo-1511671782772-c97d3e27f8b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                banner: "https://images.unsplash.com/photo-1511671782772-c97d3e27f8b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                category: "Arts",
                description: "Open to musicians of all instruments and skill levels. We perform at campus events and host open mic nights. No audition required - just a love for music!",
                shortDescription: "For musicians of all instruments and skill levels",
                members: 36,
                tags: ["Music", "Performance", "Arts"],
                officers: [
                    { name: "Olivia Johnson", role: "Conductor", avatar: "https://randomuser.me/api/portraits/women/51.jpg" },
                    { name: "Ethan Brown", role: "Section Leader", avatar: "https://randomuser.me/api/portraits/men/38.jpg" }
                ],
                socials: {
                    youtube: "youtube.com/univmusic",
                    email: "music@university.edu"
                },
                gallery: [
                    "https://images.unsplash.com/photo-1511671782772-c97d3e27f8b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                ],
                upcomingEvents: [
                    { title: "Fall Concert", date: "2023-11-14", time: "7:30 PM" },
                    { title: "Open Mic Night", date: "2023-11-28", time: "8:00 PM" }
                ]
            }
        ];

export default function ClubsPage() {
  const [filtered, setFiltered] = useState(CLUBS);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name-asc');
  const [showGrid, setShowGrid] = useState(true);
  const [membership, setMembership] = useState({});
  const [confirmClub, setConfirmClub] = useState(null);
  const [detailClub, setDetailClub] = useState(null);
  const clubModalRef = useRef();
  const confirmModalRef = useRef();

  // Filter & sort
  useEffect(() => {
    let arr = CLUBS.filter(c => {
      const matchesSearch = c.name.toLowerCase().includes(searchTerm)
        || c.shortDescription.toLowerCase().includes(searchTerm)
        || c.tags.join(' ').toLowerCase().includes(searchTerm);
      const matchesCat = category === 'all' || c.category === category;
      return matchesSearch && matchesCat;
    });
    switch (sortBy) {
      case 'name-asc': arr.sort((a,b)=>a.name.localeCompare(b.name)); break;
      case 'name-desc': arr.sort((a,b)=>b.name.localeCompare(a.name)); break;
      case 'members-asc': arr.sort((a,b)=>a.members-b.members); break;
      case 'members-desc': arr.sort((a,b)=>b.members-a.members); break;
    }
    setFiltered(arr);
  }, [searchTerm, category, sortBy]);

  // Confirm join
  const handleJoinClick = club => setConfirmClub(club);

  const confirmJoin = () => {
    setMembership(m => {
      const newM = {...m, [confirmClub.id]: !m[confirmClub.id]};
      return newM;
    });
    setConfirmClub(null);
  };

  // Detail modal outside click
  useEffect(() => {
    const handler = e => {
      if (detailClub && clubModalRef.current===e.target) setDetailClub(null);
      if (confirmClub && confirmModalRef.current===e.target) setConfirmClub(null);
    };
    window.addEventListener('click', handler);
    return ()=> window.removeEventListener('click', handler);
  }, [detailClub, confirmClub]);

  return (
    <div className="clubs-page">
      <header className="clubs-header">
        <h1>Student Clubs Directory</h1>
        <div className="clubs-controls">
          <div className="search-container">
            <i className="fas fa-search"/>
            <input
              type="text"
              placeholder="Search clubs..."
              value={searchTerm}
              onChange={e=>setSearchTerm(e.target.value)}
            />
          </div>
          <select value={category} onChange={e=>setCategory(e.target.value)}>
            <option value="all">All Categories</option>
            <option>Academic</option>
            <option>Cultural</option>
            <option>Sports</option>
            <option>Arts</option>
            <option>Technology</option>
            <option>Service</option>
          </select>
          <select value={sortBy} onChange={e=>setSortBy(e.target.value)}>
            <option value="name-asc">Sort: A–Z</option>
            <option value="name-desc">Sort: Z–A</option>
            <option value="members-asc">Members ↑</option>
            <option value="members-desc">Members ↓</option>
          </select>
          <button onClick={()=>setShowGrid(g=>!g)}>
            <i className={`fas ${showGrid?'fa-list':'fa-th-large'}`}/>
            <span>{showGrid?'List View':'Grid View'}</span>
          </button>
          <button onClick={()=>{
            setSearchTerm(''); setCategory('all'); setSortBy('name-asc');
          }}>Reset Filters</button>
        </div>
      </header>

      <main>
        {filtered.length===0
          ? <div className="no-clubs"><i className="fas fa-users-slash"/><p>No clubs found</p></div>
          : <div className={`clubs-grid ${showGrid?'grid-view':'list-view'}`}>
              {filtered.map(c=>(
                <div key={c.id} className="club-card">
                  <div className="card-banner" onClick={()=>setDetailClub(c)}>
                    <img src={c.logo} alt={c.name}/>
                    <span className="category">{c.category}</span>
                  </div>
                  <div className="card-body">
                    <h2>{c.name}</h2>
                    <p className="short-desc">{c.shortDescription}</p>
                    <div className="tags">{c.tags.map(t=><span key={t}>#{t}</span>)}</div>
                    <div className="card-footer">
                      <small><i className="fas fa-users"/> {c.members}</small>
                      <div className="btn-group">
                        <button onClick={()=>setDetailClub(c)}>View More</button>
                        <button
                          className={membership[c.id]?'joined':''}
                          onClick={()=>handleJoinClick(c)}
                        >
                          {membership[c.id]?'Joined':'Join'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        }
      </main>

      {/* Detail Modal */}
      {detailClub && (
        <div className="modal-overlay" ref={clubModalRef}>
          <div className="modal-box">
            <button className="close-btn" onClick={()=>setDetailClub(null)}>×</button>
            <div className="banner"><img src={detailClub.banner} alt="banner"/></div>
            <h2>{detailClub.name}</h2>
            <p>{detailClub.description}</p>
            {/* … officers, events, gallery, socials … */}
            <button onClick={()=>handleJoinClick(detailClub)}>{
              membership[detailClub.id]?'Leave Club':'Join Club'
            }</button>
          </div>
        </div>
      )}

      {/* Confirm Modal */}
      {confirmClub && (
        <div className="modal-overlay" ref={confirmModalRef}>
          <div className="confirm-box">
            <p>
              {membership[confirmClub.id]
                ? `Leave ${confirmClub.name}?`
                : `Join ${confirmClub.name}?`
              }
            </p>
            <button onClick={confirmJoin}>Yes</button>
            <button onClick={()=>setConfirmClub(null)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

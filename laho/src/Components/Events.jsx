import React, { useState, useEffect, useRef } from 'react';
import '../Css/Events.css'; 

        const EVENTS = [
            {
                id: 1,
                title: "Tech Workshop: Intro to Web Development",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80",
                date: "2023-11-15T16:00:00",
                location: "Computer Science Building, Room 101",
                organizer: "Tech Club",
                organizerAvatar: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
                description: "Join us for an introductory workshop on web development where you'll learn the basics of HTML, CSS, and JavaScript. Perfect for beginners!",
                tags: ["Tech", "Workshop", "Programming"],
                type: "workshop"
            },
            {
                id: 2,
                title: "Annual Music Festival",
                image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80",
                date: "2023-11-20T18:00:00",
                location: "University Quad",
                organizer: "Music Club",
                organizerAvatar: "https://images.unsplash.com/photo-1511671782779-c97d3d27d1f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
                description: "Our biggest event of the year featuring performances from student bands, solo artists, and special guests. Food trucks will be available!",
                tags: ["Music", "Concert", "Social"],
                type: "concert"
            },
            {
                id: 3,
                title: "Guest Lecture: AI in Modern Society",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80",
                date: "2023-11-22T14:00:00",
                location: "Engineering Hall, Auditorium",
                organizer: "University",
                organizerAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
                description: "Dr. Sarah Chen from Stanford University will discuss the ethical implications and future directions of artificial intelligence technologies.",
                tags: ["Lecture", "Tech", "AI"],
                type: "lecture"
            },
            {
                id: 4,
                title: "Basketball Tournament Finals",
                image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80",
                date: "2023-11-25T19:00:00",
                location: "University Gymnasium",
                organizer: "Sports Club",
                organizerAvatar: "https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
                description: "Come cheer for your favorite team as they compete in the championship game of our annual intramural basketball tournament!",
                tags: ["Sports", "Basketball", "Tournament"],
                type: "sports"
            },
            {
                id: 5,
                title: "Hackathon 2023",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80",
                date: "2023-12-02T10:00:00",
                location: "Innovation Center",
                organizer: "Tech Club",
                organizerAvatar: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
                description: "24-hour coding competition where students form teams to build innovative projects. Prizes for winners and free food for all participants!",
                tags: ["Tech", "Hackathon", "Programming"],
                type: "workshop"
            },
            {
                id: 6,
                title: "Winter Formal Dance",
                image: "https://images.unsplash.com/photo-1519671488599-2f6f6a1ef767?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80",
                date: "2023-12-09T20:00:00",
                location: "Grand Ballroom",
                organizer: "Student Council",
                organizerAvatar: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
                description: "End the semester with a night of dancing, music, and fun at our annual Winter Formal. Semi-formal attire required.",
                tags: ["Social", "Dance", "Party"],
                type: "social"
            }
        ];

export default function Events() {
  const [filtered, setFiltered] = useState(EVENTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [organizerFilter, setOrganizerFilter] = useState('');
  const [view, setView] = useState('grid'); // 'grid' | 'list' | 'calendar'
  
  const [rsvpStatus, setRsvpStatus] = useState({});
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [countdown, setCountdown] = useState({ d: "00", h: "00", m: "00", s: "00" });
  const modalRef = useRef();

  const formatDate = iso => {
    const d = new Date(iso);
    return {
      date: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      time: d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };
  };

  // Filtering
  useEffect(() => {
    const today = new Date();
    today.setHours(0,0,0,0);
    const weekEnd = new Date(today);
    weekEnd.setDate(today.getDate()+7);

    const filteredEvents = EVENTS.filter(ev => {
      const et = ev.title.toLowerCase();
      const ed = ev.description.toLowerCase();
      const tags = ev.tags.join(' ').toLowerCase();
      if (!et.includes(searchTerm) && !ed.includes(searchTerm) && !tags.includes(searchTerm)) return false;
      if (typeFilter && ev.type !== typeFilter) return false;
      const eventDate = new Date(ev.date);
      if (dateFilter === 'today' && eventDate.toDateString()!==today.toDateString()) return false;
      if (dateFilter === 'week' && (eventDate<today || eventDate>weekEnd)) return false;
      if (dateFilter === 'month' && 
          (eventDate.getMonth()!==today.getMonth() || eventDate.getFullYear()!==today.getFullYear())
         ) return false;
      if (dateFilter==='upcoming' && eventDate<today) return false;
      if (organizerFilter && !ev.organizer.toLowerCase().includes(organizerFilter)) return false;
      return true;
    });

    setFiltered(filteredEvents);
  }, [searchTerm, typeFilter, dateFilter, organizerFilter]);

  // Countdown timer
  useEffect(() => {
    if (!selectedEvent) return;
    const target = new Date(selectedEvent.date).getTime();
    const iv = setInterval(() => {
      const now = Date.now();
      const diff = target - now;
      if (diff <= 0) {
        clearInterval(iv);
        setCountdown({ d: "00", h: "00", m: "00", s: "00" });
        return;
      }
      const d = String(Math.floor(diff/(1000*60*60*24))).padStart(2,'0');
      const h = String(Math.floor((diff%(1000*60*60*24))/(1000*60*60))).padStart(2,'0');
      const m = String(Math.floor((diff%(1000*60*60))/(1000*60))).padStart(2,'0');
      const s = String(Math.floor((diff%(1000*60))/1000)).padStart(2,'0');
      setCountdown({ d, h, m, s });
    }, 1000);
    return () => clearInterval(iv);
  }, [selectedEvent]);

  // Close modal on outside click
  useEffect(() => {
    const handler = e => {
      if (modalRef.current && e.target===modalRef.current) {
        setSelectedEvent(null);
      }
    };
    window.addEventListener('click', handler);
    return ()=>window.removeEventListener('click', handler);
  }, []);

  const toggleRsvp = id => {
    setRsvpStatus(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="events-page">
      <header className="events-header">
        <div className="search-container">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search events by title, category, or location..."
            value={searchTerm}
            onChange={e=>setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
        <div className="filter-bar">
          <div className="filter-dropdown">
            <select value={typeFilter} onChange={e=>setTypeFilter(e.target.value)}>
              <option value="">All Event Types</option>
              <option value="workshop">Workshop</option>
              <option value="lecture">Lecture</option>
              <option value="social">Social</option>
              <option value="sports">Sports</option>
              <option value="concert">Concert</option>
            </select>
          </div>
          <div className="filter-dropdown">
            <select value={dateFilter} onChange={e=>setDateFilter(e.target.value)}>
              <option value="">All Dates</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="upcoming">Upcoming</option>
            </select>
          </div>
          <div className="filter-dropdown">
            <select value={organizerFilter} onChange={e=>setOrganizerFilter(e.target.value)}>
              <option value="">All Organizers</option>
              <option value="university">University</option>
              <option value="tech club">Tech Club</option>
              <option value="music club">Music Club</option>
              <option value="sports club">Sports Club</option>
            </select>
          </div>
          <div className="view-toggle">
            <button className={view==='grid'?'active':''} onClick={()=>setView('grid')}><i className="fas fa-th-large"></i> Grid</button>
            <button className={view==='list'?'active':''} onClick={()=>setView('list')}><i className="fas fa-list"></i> List</button>
            <button className={view==='calendar'?'active':''} onClick={()=>alert('Calendar view placeholder')}><i className="fas fa-calendar"></i> Calendar</button>
          </div>
        </div>
      </header>

      <main className="events-container">
        <h1>Upcoming Events</h1>
        <div className={`events-grid ${view}-view`}>
          {filtered.map(ev=>{
            const { date, time } = formatDate(ev.date);
            const attending = !!rsvpStatus[ev.id];
            return (
              <div key={ev.id} className="event-card" onClick={()=>setSelectedEvent(ev)}>
                <img src={ev.image} alt={ev.title} className="event-image"/>
                <div className="event-content">
                  <div className="event-date"><i className="far fa-calendar-alt"/> {date} • {time}</div>
                  <h3 className="event-title">{ev.title}</h3>
                  <div className="event-location"><i className="fas fa-map-marker-alt"/> {ev.location}</div>
                  <div className="event-organizer">
                    <img src={ev.organizerAvatar} alt={ev.organizer} className="organizer-avatar"/> {ev.organizer}
                  </div>
                  <p className="event-description">{ev.description}</p>
                  <div className="event-tags">{ev.tags.map(t=><span key={t} className="tag">#{t}</span>)}</div>
                  <button
                    className={`rsvp-btn ${attending?'attending':''}`}
                    onClick={e=>{e.stopPropagation(); toggleRsvp(ev.id);}}
                  >
                    {attending? '✓ Attending':'RSVP'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {selectedEvent && (
        <div className="modal-overlay" ref={modalRef}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>{selectedEvent.title}</h2>
              <button onClick={()=>setSelectedEvent(null)} className="modal-close">&times;</button>
            </div>
            <div className="modal-body">
              <img src={selectedEvent.image} alt="" className="event-detail-image"/>
              <div className="event-meta">
                <div className="meta-item"><i className="fas fa-calendar-day"/> <span>{formatDate(selectedEvent.date).date} • {formatDate(selectedEvent.date).time}</span></div>
                <div className="meta-item"><i className="fas fa-map-marker-alt"/> <span>{selectedEvent.location}</span></div>
                <div className="meta-item"><i className="fas fa-users"/> <span>{selectedEvent.organizer}</span></div>
              </div>
              <div className="countdown">
                <div className="countdown-item"><div className="countdown-value">{countdown.d}</div><div className="countdown-label">Days</div></div>
                <div className="countdown-item"><div className="countdown-value">{countdown.h}</div><div className="countdown-label">Hours</div></div>
                <div className="countdown-item"><div className="countdown-value">{countdown.m}</div><div className="countdown-label">Minutes</div></div>
                <div className="countdown-item"><div className="countdown-value">{countdown.s}</div><div className="countdown-label">Seconds</div></div>
              </div>
              <div className="event-tags modal-tags">{selectedEvent.tags.map(t=><span key={t} className="tag">#{t}</span>)}</div>
              <p className="event-full-description">{selectedEvent.description}</p>
            </div>
            <div className="modal-footer">
              <div className="share-buttons">
                <button className="share-btn"><i className="fab fa-facebook-f"/></button>
                <button className="share-btn"><i className="fab fa-twitter"/></button>
                <button className="share-btn"><i className="fas fa-envelope"/></button>
                <button className="share-btn"><i className="fas fa-link"/></button>
              </div>
              <button
                className={`modal-rsvp ${rsvpStatus[selectedEvent.id]?'attending':''}`}
                onClick={()=>toggleRsvp(selectedEvent.id)}
              >
                {rsvpStatus[selectedEvent.id]? '✓ Attending':'RSVP'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

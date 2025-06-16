import React, { useState, useEffect, useRef } from 'react';
import '../Css/AnnouncementsPage.css'; // path to your CSS

 const ANNOUNCEMENTS = [
            {
                id: 1,
                title: "Final Exam Schedule Released",
                summary: "The final exams for Semester 2 have been published. Check the academic portal for your personalized schedule.",
                author: "Academic Office",
                tags: ["exam", "deadline"],
                timestamp: "2025-05-25T10:30:00Z",
                content: "The full timetable for Semester 2 final exams is now available on the academic portal. Please log in to view your personalized schedule. Exams will begin on June 10th and conclude on June 25th. Remember to bring your student ID to all exams. Any conflicts or special accommodations must be reported to the Academic Office by May 30th.",
                isFeatured: true,
                attachments: [
                    { name: "Exam Schedule.pdf", type: "pdf", url: "#" }
                ],
                contact: "Email: exams@campus.edu | Phone: (555) 123-4567"
            },
            {
                id: 2,
                title: "Campus Career Fair 2025",
                summary: "Annual career fair featuring top employers from various industries. Register now to secure your spot!",
                author: "Career Services",
                tags: ["event", "opportunity"],
                timestamp: "2025-05-20T14:15:00Z",
                content: "We're excited to announce our annual Campus Career Fair will take place on June 5th from 9:00 AM to 4:00 PM in the Student Union Building. Over 100 employers from various industries will be attending, offering internships and full-time positions. Students from all majors are encouraged to attend. Please register in advance through the Career Services portal to secure your spot and upload your resume for employer preview. Business casual attire is recommended.",
                isFeatured: true,
                attachments: [
                    { name: "Participating Companies.pdf", type: "pdf", url: "#" },
                    { name: "Career Fair Tips.pdf", type: "pdf", url: "#" }
                ],
                contact: "Email: careers@campus.edu | Phone: (555) 987-6543"
            },
            {
                id: 3,
                title: "Library Extended Hours During Finals",
                summary: "The main library will be open 24/7 during the final exam period from June 1-25.",
                author: "University Library",
                tags: ["update"],
                timestamp: "2025-05-18T09:45:00Z",
                content: "To support students during finals, the main library will extend its hours to operate 24/7 from June 1st through June 25th. Additional study spaces have been set up on the 2nd floor, and free coffee will be available from 8:00 PM to 2:00 AM. Please remember to keep noise levels down in designated quiet zones. Library staff will be available during regular hours (8:00 AM to 10:00 PM) for assistance.",
                isFeatured: false,
                attachments: [],
                contact: "Email: library@campus.edu | Phone: (555) 456-7890"
            },
            {
                id: 4,
                title: "URGENT: Network Maintenance Tonight",
                summary: "Campus Wi-Fi and online services will be unavailable from 11 PM to 3 AM for critical maintenance.",
                author: "IT Services",
                tags: ["urgent", "update"],
                timestamp: "2025-05-22T16:20:00Z",
                content: "Critical network maintenance is scheduled for tonight from 11:00 PM to 3:00 AM. During this time, all campus Wi-Fi, online portals, and digital services will be unavailable. Please save your work and log out of all systems before 11:00 PM. This maintenance is necessary to upgrade our network infrastructure and improve performance. We apologize for any inconvenience and appreciate your understanding.",
                isFeatured: true,
                attachments: [],
                contact: "Email: itsupport@campus.edu | Phone: (555) 789-0123 (24/7 support)"
            },
            {
                id: 5,
                title: "Photography Club Exhibition",
                summary: "Join us for the annual student photography exhibition this Friday at the Arts Center.",
                author: "Photography Club",
                tags: ["event", "club"],
                timestamp: "2025-05-15T12:00:00Z",
                content: "The Photography Club is proud to present our annual student exhibition this Friday, May 26th, from 5:00 PM to 8:00 PM at the Arts Center Gallery. Over 50 pieces from student photographers will be on display, covering various themes and techniques. Light refreshments will be served. This is a great opportunity to support your fellow students and appreciate their creative work. Admission is free and open to all students, faculty, and staff.",
                isFeatured: false,
                attachments: [
                    { name: "Exhibition Poster.jpg", type: "image", url: "#" }
                ],
                contact: "Email: photo.club@campus.edu | Instagram: @campusphotoclub"
            },
            {
                id: 6,
                title: "Summer Internship Applications Due",
                summary: "Deadline for summer internship applications through the Career Center is May 30th.",
                author: "Career Services",
                tags: ["deadline", "opportunity"],
                timestamp: "2025-05-10T11:10:00Z",
                content: "The deadline to apply for summer internships facilitated through the Career Center is fast approaching. All applications must be submitted by May 30th at 11:59 PM. We have over 200 internship opportunities available across various industries. To apply, visit the Career Center portal, complete your profile, and submit your resume and cover letter for positions of interest. Drop-in resume reviews are available daily from 1:00 PM to 4:00 PM this week.",
                isFeatured: false,
                attachments: [
                    { name: "Internship Guide.pdf", type: "pdf", url: "#" }
                ],
                contact: "Email: internships@campus.edu | Phone: (555) 234-5678"
            },
            {
                id: 7,
                title: "New Mental Health Resources Available",
                summary: "Counseling Services has launched new online resources and support groups for students.",
                author: "Student Wellness Center",
                tags: ["update"],
                timestamp: "2025-05-05T13:25:00Z",
                content: "The Student Wellness Center is pleased to announce new mental health resources available to all students. We've launched an online portal with self-help tools, guided meditation sessions, and educational materials. Additionally, we're offering new support groups focusing on stress management, anxiety, and building resilience. All services are confidential and free of charge. Visit our website to explore the new resources or schedule an appointment with a counselor.",
                isFeatured: false,
                attachments: [
                    { name: "Wellness Resources Guide.pdf", type: "pdf", url: "#" },
                    { name: "Support Group Schedule.pdf", type: "pdf", url: "#" }
                ],
                contact: "Email: counseling@campus.edu | Phone: (555) 345-6789 (24/7 crisis line available)"
            },
            {
                id: 8,
                title: "Computer Science Club Hackathon",
                summary: "Annual 24-hour hackathon hosted by the CS Club - sign up by June 1st!",
                author: "Computer Science Club",
                tags: ["event", "club"],
                timestamp: "2025-05-01T10:05:00Z",
                content: "The Computer Science Club is excited to announce our annual 24-hour Hackathon, taking place on June 15-16 in the Engineering Building. This year's theme is 'Tech for Social Good'. Form teams of 2-4 members and compete to build innovative solutions to real-world problems. Prizes include tech gadgets, internship opportunities, and funding for project development. No experience necessary - workshops will be provided for beginners. Registration closes June 1st.",
                isFeatured: false,
                attachments: [
                    { name: "Hackathon Rules.pdf", type: "pdf", url: "#" },
                    { name: "Past Projects.pdf", type: "pdf", url: "#" }
                ],
                contact: "Email: cs.club@campus.edu | Discord: CampusCSClub"
            }
        ];


export default function AnnouncementsPage() {
  const [filtered, setFiltered] = useState(ANNOUNCEMENTS);
  const [featured, setFeatured] = useState([]);
  const [regular, setRegular] = useState([]);
  const [displayCount, setDisplayCount] = useState(4);
  const [filters, setFilters] = useState({ category: 'all', sort: 'newest' });
  const [modalAnn, setModalAnn] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const modalRef = useRef();

  // Filter & sort
  useEffect(() => {
    let arr = ANNOUNCEMENTS.filter(a =>
      filters.category === 'all' || a.tags.includes(filters.category)
    );
    arr.sort((a, b) =>
      filters.sort === 'newest'
        ? new Date(b.timestamp) - new Date(a.timestamp)
        : new Date(a.timestamp) - new Date(b.timestamp)
    );
    setFeatured(arr.filter(a => a.isFeatured));
    setRegular(arr.filter(a => !a.isFeatured));
    setFiltered(arr);
    setDisplayCount(4);
  }, [filters]);

  // Close modal on outside click
  useEffect(() => {
    const handler = e => {
      if (modalRef.current && e.target === modalRef.current) {
        setModalAnn(null);
      }
    };
    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, []);

  const formatDate = iso => {
    const d = new Date(iso);
    return d.toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  };

  return (
    <div className={`ann-page ${darkMode?'dark-mode':''}`}>
      <header className="ann-header">
        <div className="filters">
          <select
            value={filters.category}
            onChange={e=>setFilters(f=>({...f, category:e.target.value}))}
          >
            <option value="all">All Categories</option>
            <option value="deadline">Deadlines</option>
            <option value="event">Events</option>
            <option value="opportunity">Opportunities</option>
            <option value="club">Club News</option>
          </select>
          <select
            value={filters.sort}
            onChange={e=>setFilters(f=>({...f, sort:e.target.value}))}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
          <button onClick={()=>setFilters({category:'all', sort:'newest'})}>
            Apply Filters
          </button>
        </div>
      </header>

      <section className="featured">
        <h2>Featured Announcements</h2>
        <div className="cards">
          {featured.map(a=>(
            <div key={a.id} className="announcement-card" onClick={()=>setModalAnn(a)}>
              <div className="tags">
                {a.tags.map(tag=>(
                  <span key={tag} className={`tag tag-${tag}`}>#{tag}</span>
                ))}
              </div>
              <h3>{a.title}</h3>
              <p>{a.summary}</p>
              <footer>
                <small>{a.author}</small>
                <small>{formatDate(a.timestamp)}</small>
              </footer>
            </div>
          ))}
        </div>
      </section>

      <section className="all-announcements">
        <h2>All Announcements</h2>
        <div className="cards">
          {regular.slice(0, displayCount).map(a=>(
            <div key={a.id} className="announcement-card" onClick={()=>setModalAnn(a)}>
              <div className="tags">
                {a.tags.map(tag=>(
                  <span key={tag} className={`tag tag-${tag}`}>#{tag}</span>
                ))}
              </div>
              <h3>{a.title}</h3>
              <p>{a.summary}</p>
              <footer>
                <small>{a.author}</small>
                <small>{formatDate(a.timestamp)}</small>
              </footer>
            </div>
          ))}
        </div>
        {regular.length > displayCount && (
          <button onClick={()=>setDisplayCount(c=>c+4)} className="load-more">
            Load More Announcements
          </button>
        )}
      </section>

      {modalAnn && (
        <div className="modal-overlay" ref={modalRef}>
          <div className="modal-content">
            <button className="close-btn" onClick={()=>setModalAnn(null)}>×</button>
            <div className="modal-tags">
              {modalAnn.tags.map(tag=>(
                <span key={tag} className={`tag tag-${tag}`}>#{tag}</span>
              ))}
            </div>
            <h2>{modalAnn.title}</h2>
            <div className="meta">
              <small>{modalAnn.author}</small>
              <small>{formatDate(modalAnn.timestamp)}</small>
            </div>
            <div className="modal-body">
              {modalAnn.content.split('\n').map((line,i)=><p key={i}>{line}</p>)}
            </div>
            {modalAnn.attachments.length>0 && (
              <div className="attachments">
                <h3>Attachments:</h3>
                {modalAnn.attachments.map(att=>(
                  <a key={att.name} href={att.url} className="attachment">
                    <i className={`fas fa-file-${att.type==='pdf'?'pdf':'image'}`}></i> {att.name}
                  </a>
                ))}
              </div>
            )}
            <div className="contact">
              <h3>Contact:</h3>
              {modalAnn.contact.split('|').map((c,i)=>(
                <div key={i}>{c.trim()}</div>
              ))}
            </div>
            <div className="actions">
              <button className="save-btn">
                <i className="far fa-bookmark"></i> Save
              </button>
              <button onClick={()=>alert('Share functionality')} className="share-btn">
                <i className="fas fa-share-alt"></i> Share
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState } from 'react';
import '../Css/RsvpDashboard.css'; // Ensure you have the correct path to your CSS file

export default function RSVPDashboard() {
  const [view, setView] = useState('table'); // or 'cards'
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  // Sample data; substitute with dynamic data later
  const items = [/* ...your RSVP rows... */];

  const filtered = items.filter(item => {
    const matches = item.name.toLowerCase().includes(search.toLowerCase())
      || item.email.toLowerCase().includes(search.toLowerCase());
    return matches && (filter === '' || item.response === filter);
  });

  return (
    <div className="rsvp-container">
      <div className="rsvp-controls">
        <div className="search-filter">
          <span className="fa fa-search"></span>
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="">All Responses</option>
          <option value="confirmed">Confirmed</option>
          <option value="pending">Pending</option>
          <option value="declined">Declined</option>
        </select>
        <button onClick={() => setView(view === 'table' ? 'cards' : 'table')}>
          <span className="fa fa-th-large"></span>
        </button>
      </div>

      {view === 'table' ? (
        <table className="rsvp-table">
          <thead>
            <tr><th>Name</th><th>Email</th><th>Phone</th><th>Response</th><th>Timestamp</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {filtered.map((item,i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td><span className={`status_${item.response}`}>{item.response}</span></td>
                <td>{item.timestamp}</td>
                <td>
                  <button><span className="fa fa-envelope"></span></button>
                  <button><span className="fa fa-edit"></span></button>
                  <button><span className="fa fa-trash-alt"></span></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="rsvp-cards-grid">
          {filtered.map((item,i) => (
            <div className="rsvp-card" key={i}>
              <div className="card-header">
                <div className="avatar">{item.avatar}</div>
                <div>{item.name}</div>
                <span className={`status_${item.response}`}>{item.response}</span>
              </div>
              <div className="card-body">
                <div><span className="fa fa-envelope"></span>{item.email}</div>
                <div><span className="fa fa-phone"></span>{item.phone}</div>
                <div><span className="fa fa-clock"></span>{item.timestamp}</div>
              </div>
              <div className="card-actions">
                <button><span className="fa fa-envelope"></span></button>
                <button><span className="fa fa-edit"></span></button>
                <button><span className="fa fa-trash-alt"></span></button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
);
}

import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed">
      <h2 className="text-2xl font-bold p-4">Club Rep</h2>
      <ul className="p-4 space-y-4">
        <li>
          <Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link>
        </li>
        <li>
          <Link to="/clubs" className="hover:text-yellow-300">Clubs</Link>
        </li>
        <li>
          <Link to="/events" className="hover:text-yellow-300">Events</Link>
        </li>
      </ul>
    </div>
  );
}


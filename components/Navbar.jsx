import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-extrabold text-green-400">⚽ Goal-Haus</h1>
      <div className="space-x-6 text-lg">
        <Link to="/" className="hover:text-green-400">Home</Link>
        <Link to="/matches" className="hover:text-green-400">Matches</Link>
        <Link to="/highlights" className="hover:text-green-400">Highlights</Link>
        <Link to="/community" className="hover:text-green-400">Community</Link>
      </div>
    </nav>
  );
}

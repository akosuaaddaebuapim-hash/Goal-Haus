import { useNavigate } from "react-router-dom";

const sampleMatches = [
  { id: 1, teams: "Man Utd vs Chelsea", time: "19:45 GMT" },
  { id: 2, teams: "Real Madrid vs Barca", time: "20:00 GMT" },
  { id: 3, teams: "PSG vs Bayern", time: "21:00 GMT" },
];

export default function Matches() {
  const navigate = useNavigate();

  const handleJoinChat = (match) => {
    // redirect to Community page with match name as room
    navigate(`/community?room=${encodeURIComponent(match.teams)}`);
  };

  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">⚽ Upcoming Matches</h1>
      <div className="space-y-4">
        {sampleMatches.map((match) => (
          <div
            key={match.id}
            className="bg-gray-800 p-4 rounded-2xl shadow-lg flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-bold">{match.teams}</h2>
              <p className="text-gray-400">{match.time}</p>
            </div>
            <button
              onClick={() => handleJoinChat(match)}
              className="px-4 py-2 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition"
            >
              Join Chat
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

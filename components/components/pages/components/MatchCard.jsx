import { useState } from "react";

export default function MatchCard({ match }) {
  const [votes, setVotes] = useState({ teamA: 0, teamB: 0 });
  const [voted, setVoted] = useState(null);

  const handleVote = (team) => {
    if (voted) return; // prevent multiple votes
    setVotes((prev) => ({ ...prev, [team]: prev[team] + 1 }));
    setVoted(team);
    // 🔥 Later: send this vote to backend or leaderboard system
  };

  const totalVotes = votes.teamA + votes.teamB;
  const percentA = totalVotes ? Math.round((votes.teamA / totalVotes) * 100) : 0;
  const percentB = totalVotes ? Math.round((votes.teamB / totalVotes) * 100) : 0;

  return (
    <div className="bg-gray-900 p-4 rounded-2xl shadow-lg mb-4">
      {/* Match Info */}
      <h3 className="text-lg font-bold text-center mb-2">
        {match.teamA} ⚽ vs {match.teamB}
      </h3>
      <p className="text-center text-gray-400 mb-3">{match.time}</p>

      {/* Prediction Poll */}
      <div className="space-y-2">
        <button
          onClick={() => handleVote("teamA")}
          disabled={!!voted}
          className={`w-full p-2 rounded-lg font-semibold ${
            voted === "teamA" ? "bg-green-600" : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          {match.teamA} ({percentA}%)
        </button>
        <button
          onClick={() => handleVote("teamB")}
          disabled={!!voted}
          className={`w-full p-2 rounded-lg font-semibold ${
            voted === "teamB" ? "bg-green-600" : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          {match.teamB} ({percentB}%)
        </button>
      </div>

      {voted && (
        <p className="mt-2 text-center text-yellow-400">
          ✅ You voted for {match[voted]}!
        </p>
      )}
    </div>
  );
}

import { useEffect, useState } from "react";

export default function Leaderboard({ users }) {
  const [lastWinner, setLastWinner] = useState(null);

  // Sort users by points
  const sortedUsers = [...users].sort((a, b) => b.points - a.points);

  // Medals for top 3
  const medals = ["🥇", "🥈", "🥉"];

  // Reset leaderboard weekly (example: Sunday midnight)
  useEffect(() => {
    const now = new Date();
    const day = now.getDay(); // Sunday = 0
    const hours = now.getHours();
    const minutes = now.getMinutes();

    if (day === 0 && hours === 0 && minutes < 10) {
      if (sortedUsers.length > 0) {
        setLastWinner(sortedUsers[0].name);
      }
      // Normally you’d reset points in backend or context here
    }
  }, [sortedUsers]);

  // Progress bar helper with color
  const renderProgress = (points) => {
    const percent = Math.min((points / 200) * 100, 100); // out of 200 pts
    let color = "bg-green-500";
    if (points > 150) color = "bg-red-500";
    else if (points > 80) color = "bg-yellow-400";

    return (
      <div className="w-24 bg-gray-700 h-2 rounded-full overflow-hidden ml-2">
        <div
          className={`${color} h-2`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    );
  };

  // Assign badges
  const getBadges = (user) => {
    let badges = [];
    if (user.points > 80) badges.push("📝");
    if (user.points > 60) badges.push("👍");
    if (user.points > 40) badges.push("💬");
    return badges.join(" ");
  };

  return (
    <div className="bg-gray-900 p-4 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">🏆 Top Fans Leaderboard</h2>

      {lastWinner && (
        <div className="mb-4 text-center text-yellow-400 font-semibold">
          Last Week’s Winner: {lastWinner} 🏆
        </div>
      )}

      <ul className="space-y-2">
        {sortedUsers.map((user, idx) => (
          <li
            key={user.id}
            className="flex justify-between items-center bg-gray-800 p-3 rounded-lg"
          >
            <div className="flex items-center gap-2">
              <span>{idx < 3 ? medals[idx] : `${idx + 1}.`}</span>
              <span className="font-bold">{user.name}</span>
              <span className="text-sm">{getBadges(user)}</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-400 font-bold">{user.points} pts</span>
              {renderProgress(user.points)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

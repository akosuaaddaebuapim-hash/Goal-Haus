export default function Leaderboard({ users }) {
  // Sort users by points (highest first)
  const sortedUsers = [...users].sort((a, b) => b.points - a.points);

  // Medals for top 3
  const medals = ["🥇", "🥈", "🥉"];

  return (
    <div className="bg-gray-900 p-4 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">🏆 Top Fans Leaderboard</h2>
      <ul className="space-y-2">
        {sortedUsers.map((user, idx) => (
          <li
            key={user.id}
            className="flex justify-between items-center bg-gray-800 p-3 rounded-lg"
          >
            <span>
              {idx < 3 ? medals[idx] : `${idx + 1}.`}{" "}
              <span className="font-bold">{user.name}</span>
            </span>
            <span className="text-green-400 font-bold">{user.points} pts</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

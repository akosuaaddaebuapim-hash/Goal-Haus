export default function Leaderboard({ users }) {
  // Sort users by points
  const sortedUsers = [...users].sort((a, b) => b.points - a.points);

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">🏆 Top Fans</h2>
      <ul className="space-y-2">
        {sortedUsers.map((user, index) => (
          <li
            key={user.id}
            className="flex justify-between items-center bg-gray-700 p-3 rounded-lg"
          >
            <span>
              {index + 1}. {user.name}
            </span>
            <span className="text-green-400 font-bold">{user.points} pts</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

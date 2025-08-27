export default function FanOfTheWeek({ users }) {
  if (!users || users.length === 0) return null;

  // Find top fan (highest points)
  const topFan = [...users].sort((a, b) => b.points - a.points)[0];

  return (
    <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-2xl shadow-lg text-center mb-6">
      <h2 className="text-xl font-bold mb-2">🌟 Fan of the Week 🌟</h2>
      <div className="flex flex-col items-center">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center mb-2 overflow-hidden">
          {topFan.avatar ? (
            <img src={topFan.avatar} alt={topFan.name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-2xl">⚽</span>
          )}
        </div>

        {/* Name + Stats */}
        <p className="font-bold text-lg">{topFan.name}</p>
        <p className="text-gray-600 dark:text-gray-300">
          {topFan.points} pts · Favorite Team: {topFan.favoriteTeam || "⚽"}
        </p>
      </div>
    </div>
  );
}

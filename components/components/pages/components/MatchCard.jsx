export default function MatchCard({ homeTeam, awayTeam, time }) {
  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">{homeTeam}</h3>
        <span className="text-green-400 font-semibold">vs</span>
        <h3 className="text-xl font-bold">{awayTeam}</h3>
      </div>
      <p className="text-gray-400 text-sm">Kick-off: {time}</p>
      <button className="mt-4 w-full py-2 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition">
        Watch Live
      </button>
    </div>
  );
}

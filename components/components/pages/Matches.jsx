import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Countdown({ matchTime }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = new Date(matchTime) - new Date();
      if (diff <= 0) {
        setTimeLeft("Kick-off now!");
        clearInterval(timer);
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [matchTime]);

  return <span className="text-green-400">{timeLeft}</span>;
}

export default function Matches() {
  const matches = [
    {
      id: 1,
      home: "Liverpool",
      away: "Arsenal",
      time: "2025-08-30T18:00:00",
    },
    {
      id: 2,
      home: "PSG",
      away: "Marseille",
      time: "2025-08-31T20:00:00",
    },
  ];

  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        📅 Upcoming Matches
      </motion.h1>

      <div className="space-y-6">
        {matches.map((match) => (
          <div
            key={match.id}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-bold">
                {match.home} <span className="text-green-400">vs</span>{" "}
                {match.away}
              </h2>
              <p className="text-gray-400">
                Kick-off: {new Date(match.time).toLocaleString()}
              </p>
            </div>
            <div className="flex flex-col items-end">
              <Countdown matchTime={match.time} />
              <button className="mt-2 px-4 py-2 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition">
                Watch
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

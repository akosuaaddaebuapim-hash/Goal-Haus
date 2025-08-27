import { motion } from "framer-motion";
import MatchCard from "../components/MatchCard";
import Poll from "../components/Poll";

export default function Home() {
  return (
    <div className="px-6 py-8 max-w-6xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-green-400">
          Welcome to Goal-Haus
        </h1>
        <p className="text-gray-300 mt-4 text-lg md:text-xl">
          Your Haus of Football. Watch Live, Anytime, Anywhere.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 transition">
          Watch Live Now
        </button>
      </motion.div>

      {/* Featured Matches */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">🔥 Featured Matches</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <MatchCard
            homeTeam="Manchester United"
            awayTeam="Chelsea"
            time="20:00 GMT"
          />
          <MatchCard
            homeTeam="Real Madrid"
            awayTeam="Barcelona"
            time="21:00 GMT"
          />
        </div>
      </section>

      {/* Fan Poll */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">🗳 Fan Poll</h2>
        <Poll
          question="Who will win tonight's El Clásico?"
          options={["Real Madrid", "Barcelona", "Draw"]}
        />
      </section>

      {/* Ad Section */}
      <section className="mt-12 p-6 bg-gray-800 rounded-xl text-center">
        <p className="text-gray-400">Sponsored Ad Space</p>
        <div className="mt-4 h-24 bg-gray-700 flex items-center justify-center rounded-lg">
          <span className="text-gray-500">Your Ad Here</span>
        </div>
      </section>
    </div>
  );
}
import FanOfTheWeek from "./FanOfTheWeek";

export default function Home({ users }) {
  return (
    <div className="p-4 space-y-6">
      {/* Fan of the Week Spotlight */}
      <FanOfTheWeek users={users} />

      {/* Existing content (leaderboard, matches, chat, etc.) */}
      {/* ... */}
    </div>
  );
}

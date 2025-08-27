import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Leaderboard from "../components/Leaderboard";
import LiveChat from "../components/LiveChat";

// Helper hook for reading query params
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Community() {
  const query = useQuery();
  const initialRoom = query.get("room") || "General";

  // Users + points
  const [users, setUsers] = useState([
    { id: 1, name: "FootballFan99", points: 120 },
    { id: 2, name: "GoalLover", points: 95 },
    { id: 3, name: "You", points: 50 },
  ]);

  const [posts, setPosts] = useState([
    { id: 1, user: "FootballFan99", content: "Salah is unstoppable 🔥", likes: 12 },
    { id: 2, user: "GoalLover", content: "Can’t wait for El Clásico!", likes: 20 },
  ]);

  const [newPost, setNewPost] = useState("");

  // Award points to a user
  const awardPoints = (username, points) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.name === username ? { ...u, points: u.points + points } : u
      )
    );
  };

  // Add new post
  const handlePost = () => {
    if (newPost.trim() === "") return;
    const newEntry = {
      id: posts.length + 1,
      user: "You",
      content: newPost,
      likes: 0,
    };
    setPosts([newEntry, ...posts]);
    setNewPost("");
    awardPoints("You", 10); // +10 for posting
  };

  // Like post
  const handleLike = (id, username) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
    awardPoints("You", 2); // +2 for liking
    awardPoints(username, 1); // +1 for being liked
  };

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
      {/* Left side */}
      <div className="md:col-span-2">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          🗣 Community Hub
        </motion.h1>

        {/* Create Post */}
        <div className="bg-gray-800 p-4 rounded-2xl shadow-lg mb-6">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share your football thoughts..."
            className="w-full p-3 rounded-lg bg-gray-700 text-white resize-none"
            rows="3"
          />
          <button
            onClick={handlePost}
            className="mt-3 px-4 py-2 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition"
          >
            Post
          </button>
        </div>

        {/* Posts Feed */}
        <div className="space-y-4 mb-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800 p-4 rounded-2xl shadow-lg"
            >
              <p className="text-sm text-green-400 font-bold">@{post.user}</p>
              <p className="mt-2">{post.content}</p>
              <button
                onClick={() => handleLike(post.id, post.user)}
                className="mt-3 px-3 py-1 bg-green-500 text-black rounded hover:bg-green-400 transition"
              >
                👍 {post.likes}
              </button>
            </div>
          ))}
        </div>

        {/* Leaderboard */}
        <Leaderboard users={users} />
      </div>

      {/* Live Chat → pass awardPoints */}
      <LiveChat initialRoom={initialRoom} awardPoints={awardPoints} />
    </div>
  );
}

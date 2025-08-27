import { useState } from "react";
import { motion } from "framer-motion";

export default function Community() {
  const [posts, setPosts] = useState([
    { id: 1, user: "FootballFan99", content: "Who else thinks Salah is on fire this season?", likes: 12 },
    { id: 2, user: "GoalLover", content: "Can't wait for El Clásico 🔥", likes: 20 },
  ]);

  const [newPost, setNewPost] = useState("");

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
  };

  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className="px-6 py-8 max-w-3xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        🗣 Community Hub
      </motion.h1>

      {/* Create Post Box */}
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
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-800 p-4 rounded-2xl shadow-lg"
          >
            <p className="text-sm text-green-400 font-bold">@{post.user}</p>
            <p className="mt-2">{post.content}</p>
            <button
              onClick={() => handleLike(post.id)}
              className="mt-3 px-3 py-1 bg-green-500 text-black rounded hover:bg-green-400 transition"
            >
              👍 {post.likes}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

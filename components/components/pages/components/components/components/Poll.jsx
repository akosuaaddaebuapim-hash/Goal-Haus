import { useState } from "react";

export default function Poll({ question, options }) {
  const [votes, setVotes] = useState(Array(options.length).fill(0));

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
      <h3 className="text-lg font-bold mb-4">{question}</h3>
      <div className="space-y-3">
        {options.map((option, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-700 p-3 rounded-lg"
          >
            <span>{option}</span>
            <button
              onClick={() => handleVote(index)}
              className="px-3 py-1 bg-green-500 text-black rounded hover:bg-green-400 transition"
            >
              Vote
            </button>
            <span className="text-gray-400">{votes[index]} votes</span>
          </div>
        ))}
      </div>
    </div>
  );
}

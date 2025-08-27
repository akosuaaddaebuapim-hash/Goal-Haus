import { useState } from "react";

export default function LiveChat({ initialRoom = "General" }) {
  const [room, setRoom] = useState(initialRoom); // start with initial room
  const [messages, setMessages] = useState({
    General: [
      { id: 1, user: "FootyFan", text: "Welcome to Goal-Haus chat! 🎉" },
    ],
    "Man Utd vs Chelsea": [
      { id: 1, user: "BlueBlood", text: "Chelsea gonna win today 🔵" },
    ],
    "Real Madrid vs Barca": [
      { id: 1, user: "ElClasicoFan", text: "Hala Madrid! ⚪" },
    ],
  });

  const [newMsg, setNewMsg] = useState("");

  const handleSend = () => {
    if (newMsg.trim() === "") return;
    const newEntry = {
      id: messages[room].length + 1,
      user: "You",
      text: newMsg,
    };
    setMessages({
      ...messages,
      [room]: [...messages[room], newEntry],
    });
    setNewMsg("");
  };

  return (
    <div className="bg-gray-900 p-4 rounded-2xl shadow-lg flex flex-col h-[550px]">
      <h2 className="text-lg font-bold mb-3">💬 Live Chat</h2>

      {/* Match Room Selector */}
      <select
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        className="mb-3 px-3 py-2 rounded-lg bg-gray-700 text-white"
      >
        <option value="General">🌍 General Chat</option>
        <option value="Man Utd vs Chelsea">⚽ Man Utd vs Chelsea</option>
        <option value="Real Madrid vs Barca">🔥 Real Madrid vs Barca</option>
      </select>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-2 mb-3 bg-gray-800 p-3 rounded-lg">
        {messages[room].map((msg) => (
          <div key={msg.id} className="text-sm">
            <span className="font-bold text-green-400">{msg.user}:</span>{" "}
            <span>{msg.text}</span>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          placeholder={`Chat in ${room}...`}
          className="flex-1 px-3 py-2 rounded-lg bg-gray-700 text-white"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}

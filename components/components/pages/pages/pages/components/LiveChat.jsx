import { useState } from "react";

export default function LiveChat() {
  const [messages, setMessages] = useState([
    { id: 1, user: "FootyFan", text: "Who’s ready for kick-off? 🔥" },
    { id: 2, user: "GoalLover", text: "Come on Barca! 💙❤️" },
  ]);

  const [newMsg, setNewMsg] = useState("");

  const handleSend = () => {
    if (newMsg.trim() === "") return;
    const newEntry = {
      id: messages.length + 1,
      user: "You",
      text: newMsg,
    };
    setMessages([...messages, newEntry]);
    setNewMsg("");
  };

  return (
    <div className="bg-gray-900 p-4 rounded-2xl shadow-lg flex flex-col h-[500px]">
      <h2 className="text-lg font-bold mb-3">💬 Live Chat</h2>

      {/* Messages box */}
      <div className="flex-1 overflow-y-auto space-y-2 mb-3 bg-gray-800 p-3 rounded-lg">
        {messages.map((msg) => (
          <div key={msg.id} className="text-sm">
            <span className="font-bold text-green-400">{msg.user}:</span>{" "}
            <span>{msg.text}</span>
          </div>
        ))}
      </div>

      {/* Input box */}
      <div className="flex gap-2">
        <input
          type="text"
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          placeholder="Type your message..."
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

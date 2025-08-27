import React from "react";
import Leaderboard from "./Leaderboard"; // Make sure path is correct

export default function App() {
  const users = [
    { id: 1, name: "Alice", points: 120, favoriteTeam: "Team A", avatar: null },
    { id: 2, name: "Bob", points: 95, favoriteTeam: "Team B", avatar: null },
    { id: 3, name: "Charlie", points: 80, favoriteTeam: "Team C", avatar: null },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#111", padding: "20px", textAlign: "center" }}>
      <h1 style={{ color: "#fff", marginBottom: "20px" }}>⚽ Goal Haus Leaderboard</h1>
      <Leaderboard users={users} />
    </div>
  );
}

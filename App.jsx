import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Matches from "./pages/Matches";
import Highlights from "./pages/Highlights";
import Community from "./pages/Community";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-950 text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/highlights" element={<Highlights />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

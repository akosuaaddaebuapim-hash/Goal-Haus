import { motion } from "framer-motion";

export default function Highlights() {
  const highlights = [
    {
      id: 1,
      title: "🔥 Manchester United vs Chelsea - Match Highlights",
      url: "https://www.youtube.com/embed/aqz-KE-bpKQ", // example
    },
    {
      id: 2,
      title: "⚡ Real Madrid vs Barcelona - El Clásico Goals",
      url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    },
  ];

  return (
    <div className="px-6 py-8 max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        🎥 Match Highlights
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {highlights.map((highlight) => (
          <div
            key={highlight.id}
            className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
          >
            <iframe
              width="100%"
              height="250"
              src={highlight.url}
              title={highlight.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h2 className="text-lg font-bold">{highlight.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

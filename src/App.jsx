import SplitText from "./components/SplitText";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-700 text-white px-6 text-center">
      {/* Hero Title */}
      <SplitText
        text="Hi, I'm Ratnakar 👋"
        className="text-6xl font-extrabold tracking-tight"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        delay={80}
      />

      {/* Subtitle */}
      <SplitText
        text="Full Stack Developer | Creative Coder | Tech Explorer 🚀"
        className="mt-6 text-xl md:text-2xl text-gray-200"
        splitType="words"
        from={{ opacity: 0, y: 20 }}
        to={{ opacity: 1, y: 0 }}
      />

      {/* Call-to-action */}
      <div className="mt-10 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl shadow-md hover:scale-105 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default App;

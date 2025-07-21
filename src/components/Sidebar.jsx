const Sidebar = ({ setActiveMode }) => {
  const modes = [
    { id: "advice", label: "Advice Oracle" },
    { id: "what", label: "What Should I Do?" },
    { id: "routine", label: "Daily Routine" },
    { id: "roast", label: "Rap / Roast" },
    { id: "past", label: "Past Life" },
    { id: "fix", label: "Overthinker’s Fix" },
    { id: "story", label: "1-Minute Fiction" },
  ];

  return (
    <aside className="w-64 bg-purple-900 bg-opacity-10 border-r border-purple-700 p-4 space-y-4">
      <h2 className="text-xl font-semibold text-purple-400 mb-6">Gemini VibeDeck</h2>
      {modes.map((mode) => (
        <button
          key={mode.id}
          onClick={() => setActiveMode(mode.id)}
          className="block w-full text-left px-4 py-2 text-purple-200 hover:bg-purple-800 hover:bg-opacity-20 rounded"
        >
          {mode.label}
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;

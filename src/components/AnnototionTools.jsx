import React, { useState } from "react";
import { FaPen, FaEraser, FaHighlighter, FaFont, FaSquare, FaUndo, FaRedo, FaSave, FaTrash, FaBars } from "react-icons/fa";

const AnnotationTools = ({ mode, setMode, color, setColor, width, setWidth, onUndo, onRedo, onSave, onClear }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const modes = [
    { value: "draw", label: "Pen", icon: <FaPen /> },
    { value: "erase", label: "Eraser", icon: <FaEraser /> },
    { value: "highlight", label: "Highlight", icon: <FaHighlighter /> },
    { value: "text", label: "Text", icon: <FaFont /> },
    { value: "rectangle", label: "Rectangle", icon: <FaSquare /> },
    { value: "", label: "None", icon: null },
  ];

  return (
    <div
      className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-gray-900 text-gray-100 shadow-md transition-all duration-300 ease-in-out z-20 ${
        isOpen ? "w-64" : "w-12"
      }`}
    >
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 text-gray-100 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 p-2"
      >
        <FaBars className="text-xl" />
      </button>
      <div className={`p-4 ${isOpen ? "block" : "hidden"}`}>
        <h3 className="text-lg font-semibold mb-4">Annotation Tools</h3>
        <div className="space-y-4">
          {/* Mode Selector */}
          <div>
            <label className="block text-sm font-medium mb-1">Mode</label>
            <div className="flex flex-wrap gap-2">
              {modes.map((m) => (
                <button
                  key={m.value}
                  onClick={() => setMode(m.value)}
                  className={`p-2 rounded-md hover:bg-gray-700 hover:shadow-purple-500/50 transition duration-300 ${
                    mode === m.value ? "bg-purple-600" : "bg-gray-800"
                  }`}
                  title={m.label}
                >
                  {m.icon}
                </button>
              ))}
            </div>
          </div>
          {/* Color Picker */}
          <div>
            <label className="block text-sm font-medium mb-1">Color</label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full h-10 rounded-md border-gray-700 bg-gray-800 cursor-pointer"
            />
          </div>
          {/* Size Slider */}
          <div>
            <label className="block text-sm font-medium mb-1">Size</label>
            <input
              type="range"
              min="1"
              max="10"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="w-full accent-purple-600"
            />
            <span className="text-sm text-gray-400">{width}px</span>
          </div>
          {/* Action Buttons */}
          <div className="space-y-2">
            <button
              onClick={onUndo}
              className="w-full flex items-center justify-center gap-2 bg-gray-800 text-gray-100 px-4 py-2 rounded-md hover:bg-gray-700 hover:shadow-purple-500/50 transition duration-300"
            >
              <FaUndo /> Undo
            </button>
            <button
              onClick={onRedo}
              className="w-full flex items-center justify-center gap-2 bg-gray-800 text-gray-100 px-4 py-2 rounded-md hover:bg-gray-700 hover:shadow-purple-500/50 transition duration-300"
            >
              <FaRedo /> Redo
            </button>
            <button
              onClick={onSave}
              className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 hover:shadow-purple-500/50 transition duration-300"
            >
              <FaSave /> Save
            </button>
            <button
              onClick={onClear}
              className="w-full flex items-center justify-center gap-2 bg-gray-800 text-gray-100 px-4 py-2 rounded-md hover:bg-gray-700 hover:shadow-purple-500/50 transition duration-300"
            >
              <FaTrash /> Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnotationTools;
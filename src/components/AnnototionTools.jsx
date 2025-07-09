import React from "react";

const AnnotationTools = ({ mode, setMode, color, setColor, width, setWidth }) => {
  return (
    <div className="mb-4 bg-white p-4 rounded shadow flex flex-wrap items-center gap-4">
      <div>
        <label className="font-semibold mr-2">Mode:</label>
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="draw">Pen</option>
          <option value="">None</option>
        </select>
      </div>
      <div>
        <label className="font-semibold mr-2">Color:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="border rounded px-1 py-1"
        />
      </div>
      <div>
        <label className="font-semibold mr-2">Size:</label>
        <input
          type="range"
          min="1"
          max="10"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </div>
    </div>
  );
};

export default AnnotationTools;

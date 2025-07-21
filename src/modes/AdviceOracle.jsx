import { useState } from "react";
import { getGeminiResponse } from "../utils/geminiApi";

const AdviceOracle = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    setLoading(true);
    const prompt = `Give me a short, poetic and wise piece of advice for this question: ${input}`;
    const result = await getGeminiResponse(prompt);
    setOutput(result);
    setLoading(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">🧠 Gemini Advice Oracle</h2>
      <input
        type="text"
        className="w-full p-3 mb-4 rounded bg-black border border-purple-500 text-purple-200"
        placeholder="Ask your question..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleAsk}
        disabled={loading || !input.trim()}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded"
      >
        {loading ? "Thinking..." : "Get Advice"}
      </button>
      {output && (
        <div className="mt-6 text-purple-300 whitespace-pre-line border-t border-purple-800 pt-4">
          {output}
        </div>
      )}
    </div>
  );
};

export default AdviceOracle;

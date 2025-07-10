import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="max-w-xl mx-auto text-center p-6">
        <h2 className="text-4xl font-bold text-gray-100 mb-4">Welcome to ReadMate</h2>
        <p className="text-gray-400 text-lg mb-8">
          A simple offline-first document annotator using modern browser APIs.
        </p>
        <Link
          to="/annotate"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 hover:shadow-purple-500/50 hover:shadow-lg transition duration-300 ease-in-out"
        >
          Start Annotating
        </Link>
      </div>
    </div>
  );
};

export default Home;
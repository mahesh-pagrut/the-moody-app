import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to ReadMate</h2>
      <p className="text-gray-600 mb-6">
        A simple offline-first document annotator using modern browser APIs.
      </p>
      <Link
        to="/annotate"
        className="bg-violet-600 text-white px-6 py-3 rounded hover:bg-violet-700 transition"
      >
        Start Annotating
      </Link>
    </div>
  );
};

export default Home;

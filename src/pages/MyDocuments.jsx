import React from "react";
import { Link } from "react-router-dom";

const MyDocuments = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center p-6">
        <h2 className="text-3xl font-bold text-gray-100 mb-4">My Documents</h2>
        <div className="flex flex-col items-center">
          <span className="text-4xl mb-4">🗂️</span>
          <p className="text-gray-400 text-lg mb-6">
            Your saved documents are coming soon...
          </p>
          <Link
            to="/annotate"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 hover:shadow-purple-500/50 hover:shadow-lg transition duration-300 ease-in-out"
          >
            Start Annotating
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyDocuments;
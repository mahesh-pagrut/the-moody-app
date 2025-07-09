import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NetworkProvider from "./context/NetworkContext";
import NetworkStatusBanner from "./components/NetworkStatusBanner";
import Home from "./pages/Home";
import Annotate from "./pages/Annotate";
import MyDocuments from "./pages/MyDocuments";

const App = () => {
  return (
    <Router>
      <NetworkProvider>
        <div className="min-h-screen bg-gray-100 text-gray-900">
          <Navbar />
          <NetworkStatusBanner />
          <main className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/annotate" element={<Annotate />} />
              <Route path="/my-documents" element={<MyDocuments />} />
            </Routes>
          </main>
        </div>
      </NetworkProvider>
    </Router>
  );
};

export default App;

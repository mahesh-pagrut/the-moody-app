import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const navItemClass = (path) =>
    `px-4 py-2 rounded-md text-gray-100 hover:bg-gray-700 hover:shadow-purple-500/50 hover:shadow-sm transition duration-300 ease-in-out ${
      pathname === path ? "bg-purple-600 font-semibold" : ""
    }`;

  return (
    <nav className="bg-gray-900 shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-10">
      <Link to="/" className="text-xl font-bold text-purple-600 flex items-center">
        <span className="mr-2"></span> ReadMate
      </Link>
      <div className="space-x-4">
        <Link to="/" className={navItemClass("/")}>
          Home
        </Link>
        <Link to="/annotate" className={navItemClass("/annotate")}>
          Annotate
        </Link>
        <Link to="/my-documents" className={navItemClass("/my-documents")}>
          My Documents
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
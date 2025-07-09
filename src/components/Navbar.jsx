import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const navItemClass = (path) =>
    `px-4 py-2 rounded-md hover:bg-violet-200 ${
      pathname === path ? "bg-violet-300 font-semibold" : ""
    }`;

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-violet-600">📚 ReadMate</h1>
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

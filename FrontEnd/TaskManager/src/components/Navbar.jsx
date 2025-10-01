import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-900 via-purple-600 to-blue-500 text-white shadow-lg">
      <h1 className="text-2xl font-bold tracking-wide">TaskManager</h1>
      <div className="space-x-4">
        <Link
          to="/login"
          className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105 hover:shadow-lg"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition transform hover:scale-105 hover:shadow-lg"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

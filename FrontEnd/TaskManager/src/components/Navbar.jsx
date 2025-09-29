import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-blue-600 text-white">
      <h1 className="text-2xl font-bold">TaskManager</h1>
      <div className="space-x-4">
        <Link to="/login" className="hover:underline">
          Login
        </Link>
        <Link to="/register" className="hover:underline">
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

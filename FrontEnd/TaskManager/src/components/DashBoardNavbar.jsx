import React from "react";

function DashBoardNavbar({ onLogout }) {
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-blue-500 via-purple-600 to-blue-900 shadow p-4 rounded-lg mb-6">
      <h1 className="text-2xl font-bold ">Dashboard</h1>
      <button
        onClick={onLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}

export default DashBoardNavbar;

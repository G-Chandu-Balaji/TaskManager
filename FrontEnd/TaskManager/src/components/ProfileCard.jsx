import React from "react";

function ProfileCard({ user }) {
  if (!user) return null;
  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6 rounded-xl shadow-lg mb-6 transform transition hover:-translate-y-2 hover:shadow-2xl">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md text-xl font-bold text-gray-700">
          {user.name.charAt(0)}
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Welcome, {user.name} 👋
          </h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

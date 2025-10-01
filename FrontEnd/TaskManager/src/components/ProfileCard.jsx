import React from "react";

function ProfileCard({ user }) {
  if (!user) return null;
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h2 className="text-xl font-semibold">Welcome, {user.name} 👋</h2>
      <p className="text-gray-600">{user.email}</p>
    </div>
  );
}

export default ProfileCard;

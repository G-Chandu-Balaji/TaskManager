import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-5xl font-extrabold mb-6  overflow-hidden border-r-4 border-gray-800 whitespace-nowrap typewriter bg-gradient-to-r from-blue-900 via-purple-500 to-blue-500 text-transparent bg-clip-text ">
          Manage Your Tasks Efficiently
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-xl">
          Keep track of all your tasks, set priorities, and stay productive.
          Sign up now and get started with TaskManager today!
        </p>
        <div className="space-x-4">
          <Link
            to="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Login
          </Link>
        </div>
      </main>

      <section className="bg-white py-20 relative z-10">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: "Organize Tasks",
              desc: "Group, categorize, and prioritize your tasks with ease.",
            },
            {
              title: "Stay Productive",
              desc: "Track your progress and complete tasks efficiently.",
            },
            {
              title: "Secure & Reliable",
              desc: "JWT-based authentication keeps your data safe.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 animate-slide-up delay-${
                index * 200
              }`}
            >
              <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default LandingPage;

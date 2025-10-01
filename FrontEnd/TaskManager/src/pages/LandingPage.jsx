import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-800">
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
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Organize Tasks</h2>
            <p>Group, categorize, and prioritize your tasks with ease.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Stay Productive</h2>
            <p>Track your progress and complete tasks efficiently.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Secure & Reliable</h2>
            <p>JWT-based authentication keeps your data safe.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;

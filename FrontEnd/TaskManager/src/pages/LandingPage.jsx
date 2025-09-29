import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="mt-5 text-5xl">LandingPage</div>;
    </div>
  );
}

export default LandingPage;

import React from "react";
import { Link } from "react-router-dom";

function OurStory() {
  return (
    <div className="text-center text-4xl">
      <h2 className="mb-3">Our Story Page</h2>
      <Link className="text-2xl" to="/">
        🔙 Back to home page 🔙
      </Link>
    </div>
  );
}

export default OurStory;

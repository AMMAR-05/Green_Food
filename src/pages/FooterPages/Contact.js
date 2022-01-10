import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="text-center text-4xl">
      <h1 className="mb-3">Contact</h1>
      <Link className="text-2xl" to="/">
        🔙 Back to home page 🔙
      </Link>
    </div>
  );
}

export default Contact;

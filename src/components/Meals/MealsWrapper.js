import React from "react";
import { Link } from "react-router-dom";

function MealsWrapper({ children }) {
  return (
    <ul className="flex flex-col items-center ">
      <Link className="text-2xl" to="/">
        🔙 Back to home page 🔙
      </Link>
      {children}
    </ul>
  );
}

export default MealsWrapper;

import React from "react";
import Styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar({ isclose }) {
  return (
    <nav
      className={`${Styles.nav} ${
        isclose && Styles.opened
      } rounded  flex flex-col justify-center `}
    >
      <div className="flex justify-around text-white">
        <Link to="/">Home</Link>
        <Link to="/ourStory">Our Story</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/carrer">Carrer</Link>
      </div>
    </nav>
  );
}

export default Navbar;

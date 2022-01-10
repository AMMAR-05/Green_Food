import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Meals.module.css";

function Meals() {
  return (
    <section className={Styles.meals}>
      <p className="text-2xl">🍴Choose Your Meal🍴</p>
      <div>
        <h3>🌳Fruits</h3>
        <Link to="/fruits">👉</Link>
      </div>
      <div>
        <h3>🌳Vegetables</h3>
        <Link to="/vegetables">👉</Link>
      </div>
      <div>
        <h3>🌳Grains</h3>
        <Link to="/grains">👉</Link>
      </div>
      <div>
        <h3>🌳Legumes</h3>
        <Link to="/legumes">👉</Link>
      </div>
      <div>
        <h3>🌳Nuts</h3>
        <Link to="/nuts">👉</Link>
      </div>
    </section>
  );
}

export default Meals;

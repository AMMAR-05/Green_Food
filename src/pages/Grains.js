import React from "react";
import MealsItem from "../components/Meals/MealsItem";
import MealsWrapper from "../components/Meals/MealsWrapper";

const DUMMY_GRAINS_MEALS = [
  {
    id: "m1",
    name: "Quinoa",
    description: "Nutrition Details",
    price: 22.99,
    image:
      "https://image.freepik.com/free-vector/hand-drawn-apple-fruit-illustration_53876-2980.jpg",
  },
  {
    id: "m2",
    name: "barley",
    description: "Nutrition Details",
    price: 16.5,
    image:
      "https://image.freepik.com/free-vector/pink-pastel-juicy-banana-vector_53876-58014.jpg",
  },
  {
    id: "m3",
    name: "buckwheat",
    description: "Nutrition Details",
    price: 12.99,
    image:
      "https://image.freepik.com/free-vector/berries-realistic-composition_1284-11282.jpg",
  },
  {
    id: "m4",
    name: "rice",
    description: "Nutrition Details",
    price: 18.99,
    image:
      "https://image.freepik.com/free-vector/hand-drawn-colorful-orange-illustration_53876-2977.jpg",
  },
  {
    id: "m5",
    name: "oats",
    description: "Nutrition Details",
    price: 18.99,
    image:
      "https://image.freepik.com/free-vector/watermelon-pattern-design_1273-102.jpg",
  },
];

function Grains() {
  const grainsMeals = DUMMY_GRAINS_MEALS.map((meal) => (
    <MealsItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
    ></MealsItem>
  ));

  return (
    <React.Fragment>
      <MealsWrapper>
        <h2 className="mt-5 text-2xl text-amber-400">GRAINS</h2>
        {grainsMeals}
      </MealsWrapper>
    </React.Fragment>
  );
}

export default Grains;

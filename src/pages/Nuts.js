import React from "react";
import MealsItem from "../components/Meals/MealsItem";
import MealsWrapper from "../components/Meals/MealsWrapper";

const DUMMY_NUTS_MEALS = [
  {
    id: "m1",
    name: "Almonds",
    description: "Nutrition Details",
    price: 22.99,
    image:
      "https://image.freepik.com/free-vector/hand-drawn-apple-fruit-illustration_53876-2980.jpg",
  },
  {
    id: "m2",
    name: "walnuts",
    description: "Nutrition Details",
    price: 16.5,
    image:
      "https://image.freepik.com/free-vector/pink-pastel-juicy-banana-vector_53876-58014.jpg",
  },
  {
    id: "m3",
    name: "cashews",
    description: "Nutrition Details",
    price: 12.99,
    image:
      "https://image.freepik.com/free-vector/berries-realistic-composition_1284-11282.jpg",
  },
  {
    id: "m4",
    name: "chestnuts",
    description: "Nutrition Details",
    price: 18.99,
    image:
      "https://image.freepik.com/free-vector/hand-drawn-colorful-orange-illustration_53876-2977.jpg",
  },
];

function Grains() {
  const nutsMeals = DUMMY_NUTS_MEALS.map((meal) => (
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
        <h2 className="mt-5 text-2xl text-amber-400">NUTS</h2>
        {nutsMeals}
      </MealsWrapper>
    </React.Fragment>
  );
}

export default Grains;

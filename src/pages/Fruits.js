import React from "react";
import MealsItem from "../components/Meals/MealsItem";
import MealsWrapper from "../components/Meals/MealsWrapper";

const DUMMY_FRUITS_MEALS = [
  {
    id: "m1",
    name: "Apples",
    description: "Nutrition Details",
    price: 22.99,
    image:
      "https://image.freepik.com/free-vector/hand-drawn-apple-fruit-illustration_53876-2980.jpg",
  },
  {
    id: "m2",
    name: "Bananas",
    description: "Nutrition Details",
    price: 16.5,
    image:
      "https://image.freepik.com/free-vector/pink-pastel-juicy-banana-vector_53876-58014.jpg",
  },
  {
    id: "m3",
    name: "Berries",
    description: "Nutrition Details",
    price: 12.99,
    image:
      "https://image.freepik.com/free-vector/berries-realistic-composition_1284-11282.jpg",
  },
  {
    id: "m4",
    name: "Oranges",
    description: "Nutrition Details",
    price: 18.99,
    image:
      "https://image.freepik.com/free-vector/hand-drawn-colorful-orange-illustration_53876-2977.jpg",
  },
  {
    id: "m5",
    name: "Melons",
    description: "Nutrition Details",
    price: 18.99,
    image:
      "https://image.freepik.com/free-vector/watermelon-pattern-design_1273-102.jpg",
  },
  {
    id: "m6",
    name: "Pears",
    description: "Nutrition Details",
    price: 18.99,
    image:
      "https://image.freepik.com/free-vector/hand-drawn-pear-fruit-illustration_53876-2983.jpg",
  },
  {
    id: "m7",
    name: "Peaches",
    description: "Nutrition Details",
    price: 18.99,
    image:
      "https://image.freepik.com/free-vector/vintage-flower-illustration_53876-26503.jpg",
  },
];

function Fruits(props) {
  const fruitsMeals = DUMMY_FRUITS_MEALS.map((meal) => (
    <MealsItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
    ></MealsItem>
  ));

  return (
    <React.Fragment>
      <MealsWrapper>
        <h2 className="mt-5 text-2xl text-amber-400">Fruits</h2>
        {fruitsMeals}
      </MealsWrapper>
    </React.Fragment>
  );
}

export default Fruits;

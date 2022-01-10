import React, { useContext } from "react";
import Styles from "./MealsItem.module.css";
import MealsForm from "./MealsForm/MealsForm";
import CartContext from "../../store/cart-context";

function MealsItem(props) {
  const newCartContext = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    newCartContext.addItems({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={`w-80 h-16 sm:w-[30rem] lg:w-[50rem] ${Styles.meals_item}`}>
      <img className="w-16 h-16" src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <div>{props.description}</div>
      <div>{price}$</div>
      <MealsForm addToCart={addToCartHandler} />
    </li>
  );
}

export default MealsItem;

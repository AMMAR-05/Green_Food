import React, { useContext } from "react";
import CartIcon from "./CartIcon";
import CartContext from "../../store/cart-context";

function CartButton(props) {
  const cartItemNumber = useContext(CartContext);

  const cartItemCont = cartItemNumber.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  return (
    <button
      onClick={props.onOpenModal}
      className="w-20 sm:w-28 md:w-36 flex items-center justify-around border-none cursor-pointer rounded-lg text-white bg-[#291717e3]"
    >
      <span>
        <CartIcon />
      </span>
      <span className="text-sm mt-1">Cart</span>
      <span>{cartItemCont}</span>
    </button>
  );
}

export default CartButton;

import React, { useContext } from "react";
import Modal from "../Ui/Modal";
import CartContext from "../../store/cart-context";

function Cart(props) {
  const newUpdatedCart = useContext(CartContext);

  console.log(newUpdatedCart);

  // icrease amount of items
  const icreaseItems = (item) => {
    newUpdatedCart.addItems(item);
    console.log(item);
  };

  // decrease amount of items
  const decreaseItems = (id) => {
    newUpdatedCart.removeItems(id);
  };

  // Total Amount
  const finalAmount = newUpdatedCart.totalAmount.toFixed(2);

  // Output Cart Item
  const lastUpdatedCart = newUpdatedCart.items.map((item) => (
    <ul className="border-b-2 h-10 flex items-center" key={item.id}>
      <li className="w-1/4">{item.name}</li>
      <span className="w-1/4 text-center">{item.price}</span>
      <h5 className="w-1/4 text-center">x{item.amount}</h5>
      <div className="w-1/6 flex justify-around before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative">
        <button
          className="relative text-white"
          onClick={decreaseItems.bind(null, item.id)}
        >
          -
        </button>
        <button
          className="relative text-white"
          onClick={icreaseItems.bind(null, item)}
        >
          +
        </button>
      </div>
    </ul>
  ));

  return (
    <Modal closeModal={props.onCloseModal}>
      <div className="text-black">{lastUpdatedCart}</div>
      <div className="my-3 border-b-2">
        <span className="text-black mr-3">Total Amount </span>
        <span className="text-black ml-5">{finalAmount}$</span>
      </div>
      <div className="text-black">
        <button className="mr-[5.5rem]" onClick={props.onCloseModal}>
          Close
        </button>
        <div className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
          <button className="relative text-white">Order</button>
        </div>
      </div>
    </Modal>
  );
}

export default Cart;

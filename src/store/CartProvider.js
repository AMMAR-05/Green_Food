import { useReducer, useEffect } from "react";
import CartContext from "./cart-context";

const defCartVal = {
  items: [],
  totalAmount: 0,
};

const localData = "localCart";

const cartReducer = (state, action) => {
  // Adding Items
  if (action.type === "ADD_ITEM") {
    // Check if the added item exists
    const findExistingItemsIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // Get The Item
    const existingItem = state.items[findExistingItemsIndex];

    let newUpdatedItems;

    if (existingItem) {
      const newUpdatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };

      // copy the old items
      newUpdatedItems = [...state.items];

      newUpdatedItems[findExistingItemsIndex] = newUpdatedItem;
    } else {
      newUpdatedItems = state.items.concat(action.item);
    }

    // Calc total amount
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // Return final items & total amount
    return {
      items: newUpdatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  // Removing Items
  if (action.type === "REMOVE_ITEM") {
    const findExistingItemsIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[findExistingItemsIndex];

    const updateTotalAmount = state.totalAmount - existingItem.price;

    let newUpdatedItems;

    if (existingItem.amount === 1) {
      newUpdatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      newUpdatedItems = [...state.items];
      newUpdatedItems[findExistingItemsIndex] = updatedItem;
    }

    return {
      items: newUpdatedItems,
      totalAmount: updateTotalAmount,
    };
  }
  return defCartVal;
};

function CartProvider(props) {
  const [cartState, dispatchCart] = useReducer(
    cartReducer,
    defCartVal

    // (defCartVal) => JSON.parse(localStorage.getItem(localData) || defCartVal)
  );

  // useEffect(() => {
  //   localStorage.setItem(localData, JSON.stringify(cartState));
  // }, [cartState]);

  // Adding Items to cart
  const addItem = (item) => {
    dispatchCart({ type: "ADD_ITEM", item: item });
  };

  // Removing Items from cart
  const removeItem = (id) => {
    dispatchCart({ type: "REMOVE_ITEM", id: id });
  };

  // Context Obj Values
  const cartDetail = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addItem,
    removeItems: removeItem,
  };

  return (
    <CartContext.Provider value={cartDetail}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;

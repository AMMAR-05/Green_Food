import { React, useRef } from "react";
import Input from "../../Ui/Input";

function MealsForm(props) {
  const inputAmount = useRef();

  const submitForm = (event) => {
    event.preventDefault();
    const enteredInputAmount = inputAmount.current.value;
    const enteredInputAmountToNum = +enteredInputAmount;

    props.addToCart(enteredInputAmountToNum);
  };

  return (
    <form onSubmit={submitForm} className="mr-5 text-black">
      <button>Add</button>
      <Input
        ref={inputAmount}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
    </form>
  );
}

export default MealsForm;

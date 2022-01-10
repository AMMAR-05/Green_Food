import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <React.Fragment>
      <input ref={ref} className="w-8 ml-4" {...props.input} />
    </React.Fragment>
  );
});

export default Input;

import React, { useState } from "react";
const Setstate = () => {
  const [num, setnum] = useState(3);
  function increment() {
    setnum(num + 1);
  }
  function decrement() {
    setnum(num - 1);
  }
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br></br>
      <label>Count increment/decrement: {num}</label>
    </div>
  );
};
export default Setstate;

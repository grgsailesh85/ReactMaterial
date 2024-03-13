import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    // Update count based on the previous state
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    // Update count based on the previous state
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default Counter;

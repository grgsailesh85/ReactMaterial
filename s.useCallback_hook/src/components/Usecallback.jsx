import React, { useState, useCallback } from "react";

const Usecallback = () => {
  const [count, setCount] = useState(0);

  // Define a callback function
  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // Empty dependency array indicates no dependencies

  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default Usecallback;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const App = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  useEffect(() => {
    alert("I am clicked");
  }, [num]);

  return (
    <>
      <h1>This is useEffect Hook.</h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click Me {num}
      </button>
      <br />
      <button
        onClick={() => {
          setNums(nums + 1);
        }}
      >
        Click Me {nums}
      </button>
    </>
  );
};
export default App;

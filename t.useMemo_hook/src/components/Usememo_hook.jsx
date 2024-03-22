import React, { useMemo } from "react";

const Usememo_hook = ({ a, b }) => {
  const sum = useMemo(() => {
    console.log("Calculating sum...");
    return a + b;
  }, [a, b]);

  return (
    <div>
      <p>Sum: {sum}</p>
    </div>
  );
};

export default Usememo_hook;

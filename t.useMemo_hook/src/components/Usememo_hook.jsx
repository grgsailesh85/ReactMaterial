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
//sum is memorized using usememo and the function inside useMemo calculate the sum of a and b. The dependencies [a,b] indicate that the sum should be recalculated whenever a and b changes. If neither a nor b changes the previously memorized value of the sum will be reused.

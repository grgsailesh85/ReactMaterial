import React from "react";
import { Faculty } from "../App";
function CompC() {
  return (
    <>
      <Faculty.Consumer>
        {(fac) => {
          return <h2>And recently graduated from {fac}.</h2>;
        }}
      </Faculty.Consumer>
    </>
  );
}
export default CompC;

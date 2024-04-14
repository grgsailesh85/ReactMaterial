import React from "react";
import "./App.css";
import { UseSelector, useDispatch, useSelector } from "react-redux";
const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement Counter</h1>
        <h4>Using React and Redux</h4>
        <div className="quantity">
          <a className="qunatity_minus" title="Decrement">
            <span>-</span>
          </a>
          <input
            name="qunatity"
            type="text"
            className="quantity_input"
            value={myState}
          />
          <a className="qunatity_plus" title="Increment">
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
};
export default App;

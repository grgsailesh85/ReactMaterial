import "./App.css";
import React from "react";

function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <>
      <h1>Healthy Food</h1>
      <ul class="list-group">
        {foodItems.map((foodItems, index) => (
          <li key={index} class="list-group-item">
            {foodItems}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

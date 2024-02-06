import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  let foodItems = ["Apple", "Banana", "Orange", "Pine Apple", "Coconut"];
  return (
    <>
      <h1 className="food-heading">Healthy Fruits</h1>
      <ErrorMsg items={foodItems}></ErrorMsg>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}
export default App;

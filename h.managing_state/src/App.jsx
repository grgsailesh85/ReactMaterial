import "./App.css";
import Input from "./components/Input";
import { useState } from "react";
import Items from "./components/Items";

function App() {
  // let textStateArr = useState("text you just entered");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // the above is same as below given syntax

  // let [textToShow, setTextState] = useState("text you just entered");
  let [items, setItems] = useState([]);
  // let items = [
  //   "Sailesh Gurung",
  //   "Sailesh Gurung",
  //   "Sailesh Gurung",
  //   "Sailesh Gurung",
  // ];

  const handleOnChange = (event) => {
    if (event.key === "Enter") {
      let newItem = event.target.value;
      let newItems = [...items, newItem];
      event.target.value = "";
      setItems(newItems);
      console.log("you just entered " + newItem);
    }
  };
  return (
    <>
      {/* <p>
        The text enter in the below input box will be shown automatically below
        the input text as you type in the box.
      </p> */}
      <Input handleOnChange={handleOnChange}></Input>
      {/* <p>{textToShow}</p> */}
      <br />
      <h1>My Items List</h1>
      <Items myItems={items}></Items>
    </>
  );
}
export default App;

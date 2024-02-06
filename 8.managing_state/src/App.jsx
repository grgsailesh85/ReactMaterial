import "./App.css";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  // let textStateArr = useState("text you just entered");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // the above is same as below given syntax
  let [textToShow, setTextState] = useState("text you just entered");

  const handleOnChange = (event) => {
    setTextState(event.target.value);
  };
  return (
    <>
      <p>
        The text enter in the below input box will be shown automatically below
        the input text as you type in the box.
      </p>
      <Input handleOnChange={handleOnChange}></Input>
      <p>{textToShow}</p>
    </>
  );
}
export default App;

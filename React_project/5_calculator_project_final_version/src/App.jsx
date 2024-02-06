import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Display from "./components/display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  let [calValue, setCalValue] = useState([""]);
  const onButtonClick = (buttonName) => {
    if (buttonName === "C") {
      setCalValue("");
    } else if (buttonName === "=") {
      const result = eval(calValue);
      setCalValue(result);
    } else {
      const newDisplayValue = calValue + buttonName;
      setCalValue(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calValue} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;

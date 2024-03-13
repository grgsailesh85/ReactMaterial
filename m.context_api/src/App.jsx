import React, { createContext } from "react";
// import { useContext } from "react";
import "./App.css";
import CompA from "./Components/CompA";
import CompD from "./Components/CompD";
const Faculty = createContext();
const Age = createContext();
const App = () => {
  return (
    <>
      <Faculty.Provider value="Computer Engineering">
        <h1>My name is Sailesh Gurung.</h1>
        <CompA></CompA>
        <Age.Provider value="24">
          <CompD></CompD>
        </Age.Provider>
      </Faculty.Provider>
    </>
  );
};
export default App;
export { Faculty, Age };

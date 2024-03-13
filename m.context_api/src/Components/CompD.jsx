import React, { useContext } from "react";
import { Age } from "../App";
const CompD = () => {
  const age = useContext(Age);
  return <h3>My Age is {age}.</h3>;
};
export default CompD;

import { useRef } from "react";
const RefsOne = () => {
  //create a ref called inputRef using useRef() hook
  const inputRef = useRef(null);
  const handleClick = () => {
    //when the button is clicked we access the input elements value using inputRef.curren.value
    console.log("Input Value:", inputRef.current.value);
    //setting focus on the input element
    inputRef.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};
export default RefsOne;

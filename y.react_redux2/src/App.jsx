import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, multiply } from "./redux/Counter/counter";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        Currently count is {count}
        <br />
        <br />
        <button onClick={() => dispatch(decrement())}>-</button>
        <br />
        <br />
        <button onClick={() => dispatch(increment())}>+</button>
        <br />
        <br />
        <button onClick={() => dispatch(multiply())}>*</button>
      </div>
    </>
  );
}

export default App;

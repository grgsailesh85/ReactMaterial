import "./App.css";
function App({ temp = 30 }) {
  let message = "";
  {
    temp > 30 && (message = "Its a Hot Day!!!");
  }
  {
    !temp > 30 && (message = "Its a Cold Day!!!");
  }
  {
    temp == 30 && (message = "Its a Cold Day!!!");
  }
  return (
    <div>
      <p>The current temperature is: {temp} degree celsius.</p>
      {message}
    </div>
  );
}
export default App;

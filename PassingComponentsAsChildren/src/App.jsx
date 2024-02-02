import "./App.css";
import Container from "./components/Container";
import AnotherChildren from "./components/AnotherChildren";
import Sailesh from "./components/Sailesh";

function App() {
  return (
    <>
      <Container>
        <h3>This is a content passed as a children</h3>
      </Container>
      <Container>
        <p>This is second children</p>
      </Container>
      <Container>
        <AnotherChildren>
          <Sailesh></Sailesh>
        </AnotherChildren>
      </Container>
    </>
  );
}

export default App;

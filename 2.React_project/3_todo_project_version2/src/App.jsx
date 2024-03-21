import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
// import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "2080-10-15",
    },
    {
      name: "Go To College",
      dueDate: "2080-10-15",
    },
    {
      name: "Study Licence Book",
      dueDate: "2080-10-15",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItem={todoItems} />
    </center>
  );
}
export default App;

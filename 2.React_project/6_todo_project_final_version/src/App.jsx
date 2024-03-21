import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
// import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "2080-10-15",
  //   },
  //   {
  //     name: "Go To College",
  //     dueDate: "2080-10-15",
  //   },
  //   {
  //     name: "Study Licence Book",
  //     dueDate: "2080-10-15",
  //   },
  // ];
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };
  const handleDeleteItem = (todoItemName) => {
    console.log(todoItemName);
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoItems todoItem={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}
export default App;

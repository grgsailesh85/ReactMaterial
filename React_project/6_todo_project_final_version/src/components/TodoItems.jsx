import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItem, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItem.map((item) => (
        <TodoItem
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;

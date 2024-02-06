import styles from "./Input.module.css";
const Input = () => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <input
      type="text"
      placeholder="Enter Some Text"
      className={styles.input}
      onChange={handleOnChange}
    />
  );
};
export default Input;

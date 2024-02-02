import styles from "./Buttons.module.css";

const Buttons = () => {
  const myName = "Sailesh Gurung";
  const handleButton = (myName) => {
    alert(`Your Name is ${myName}`);
  };
  return (
    <>
      <button
        type="button"
        className={`btn btn-info ${styles.button}`}
        onClick={() => handleButton(myName)}
      >
        Click Me
      </button>
    </>
  );
};
export default Buttons;

const Input = ({ handleOnChange }) => {
  return (
    <>
      {/* <input
        type="text"
        placeholder="Enter Some text"
        onChange={handleOnChange}
      /> */}
      <textarea
        name=""
        id=""
        cols="30"
        rows="5"
        placeholder="enter some text"
        onChange={handleOnChange}
      ></textarea>
    </>
  );
};
export default Input;

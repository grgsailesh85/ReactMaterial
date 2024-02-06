const ChildrenComp = ({ myList, handleButton }) => {
  return (
    <>
      <ul>
        {myList.map((oneItem, index) => (
          <li key={index}>{oneItem}</li>
        ))}
      </ul>
      <button onClick={handleButton}> Click Me</button>;
    </>
  );
};
export default ChildrenComp;

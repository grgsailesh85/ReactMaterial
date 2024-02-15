import ChildrenComp from "./ChildrenComp";
const ParentComp = () => {
  const lists = ["a", "b", "c", "d", "e"];
  return (
    <ChildrenComp
      myList={lists}
      handleButton={() => {
        alert("I have Been Clicked");
      }}
    ></ChildrenComp>
  );
};
export default ParentComp;

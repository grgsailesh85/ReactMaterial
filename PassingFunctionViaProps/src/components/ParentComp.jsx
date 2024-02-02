import ChildrenComp from "./ChildrenComp";
const ParentComp = () => {
  return (
    <ChildrenComp
      handleButton={() => {
        alert("I have Been Clicked");
      }}
    ></ChildrenComp>
  );
};
export default ParentComp;

const Items = ({ myItems }) => {
  return (
    // <ul>
    //   {myItems.map((item) => (
    //     <li>{item}</li>
    //   ))}
    // </ul>
    <ul class="list-group">
      {myItems.map((item) => (
        <li className="list-group-item d-flex justify-content-between align-items-center">
          {item}
          <button type="button" className="btn btn-info ">
            Click
          </button>
        </li>
      ))}
    </ul>
  );
};
export default Items;

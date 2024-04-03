import React from "react";
//import the useParams hook from the react-router-dom library which allows us to access parameters from the URL
import { useParams } from "react-router-dom";
const User = () => {
  //calls the useParams hook to get the parameters from the URL and stores them in the params variable
  const params = useParams();
  return (
    <div>
      {/* renders an h1 heaeding with the text "I am user " followed by the "username" parameters obtained from the URL. */}
      <h1>I am user {params.username}</h1>
    </div>
  );
};
export default User;

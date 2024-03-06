import React from "react";
import { useState } from "react";
const Myform = () => {
  // define state variable to store form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [submittedData, setSubmittedData] = useState(null);
  //event handler to update form data as user types
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  //event handler to submit form data
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setSubmittedData(formData);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label>
          UserName :
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br /> <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br /> <br />
        <label>
          Password :
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>Username: {submittedData.username}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};
export default Myform;

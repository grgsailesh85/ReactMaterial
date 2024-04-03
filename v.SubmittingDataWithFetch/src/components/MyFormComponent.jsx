import React, { useState } from "react";

const MyFormComponent = () => {
  //state to keep track of the namae and email entered by the user
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //we define a function to handle form submission. This function will be called when the user clicks the submit button
  const handleSubmit = (e) => {
    //prevent default form submission behaviour
    e.preventDefault();

    //construct data object with user input
    const data = { name, email };
    //call function to submit data to server
    submitData(data);
  };

  //a function to send form data to the server using Fetch API
  const submitData = async (data) => {
    try {
      const response = await fetch("https://api.example.com/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      //handle successful response
      console.log("Form submitted successfully!");
    } catch (error) {
      //handle errors
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      Name:{" "}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      Email:
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyFormComponent;

//when the user submits form the handleSubmit function is called. this functio  constructs a data object with the user input and then calls 'submitData' to send this data to the server using the fetch API. finally we handle the servers to provide feedback to the user.

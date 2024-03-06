import React, { useRef, useState } from "react";

const RefsTwo = () => {
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef(null);

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
    // If showPassword is true, set the input type to 'text'; otherwise, set it to 'password'
    passwordRef.current.type = showPassword ? "text" : "password";
  };

  return (
    <div>
      <label>
        Password:
        <input
          type="password"
          ref={passwordRef}
          // Set the input type based on showPassword state
          // If showPassword is true, it shows the text; otherwise, it hides it.
          // This allows us to toggle the visibility of the password input
          // without storing the password in the state.
        />
      </label>
      <button onClick={toggleVisibility}>
        {showPassword ? "Show Password" : "Hide Password"}
      </button>
    </div>
  );
};

export default RefsTwo;

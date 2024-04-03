import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        {/* NavLink renders a NavLink component with a to prop set to '/', which represents the root route */}
        {/* sets a dynamic class name for the link based on whether it is active or not, if the link is active, it adds the class red otherwise it adds an emty string */}
        <NavLink
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
          to="/"
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
          to="/about"
        >
          <li>About</li>
        </NavLink>
        <NavLink
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
          to="/login"
        >
          <li>Login</li>
        </NavLink>
      </nav>
    </div>
  );
};
export default Navbar;

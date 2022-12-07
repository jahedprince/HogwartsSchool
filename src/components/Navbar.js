import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar" className="row">
      <NavLink to="/students">Wizards</NavLink>
      <NavLink to="/campuses">Houses</NavLink>
      <NavLink to="/CreateCampus">New House</NavLink>
      <NavLink to="/CreateStudent">New Wizard</NavLink>
    </div>
  );
};

export default Navbar;

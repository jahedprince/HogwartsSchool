import React from "react";
import { NavLink } from "react-router-dom";

//TODO add (number of campuses and number of students to navbar)
const Navbar = () => {
  return (
    <div id="navbar" className="row">
      <NavLink to="/students" className="active">
        Students
      </NavLink>
      <NavLink to="/campuses" className="active">
        Campuses
      </NavLink>
    </div>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
// import "./NavBar.css";

function VendingMachine() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/chips">
        Chips
      </NavLink>
      <NavLink exact to="/soda">
        Soda
      </NavLink>
      <NavLink exact to="/chocolate">
        Chocolate
      </NavLink>
    </nav>
  );
}

export default VendingMachine;
import React from "react"; // Import React
import NavBar from "../NavbarFolder/Navbar"; // Import the NavBar component
import { Outlet } from "react-router-dom"; // Import Outlet for nested routing

function Shared() {
  return (
    <div>
      <NavBar /> {/* Render the navigation bar */}
      <Outlet /> {/* Render the matched child route components */}
    </div>
  );
}

export default Shared; // Export the Shared component

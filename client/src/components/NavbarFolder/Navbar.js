// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const NavBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="brand">α Pastry & Bakery</div>
//       <ul className="navLinks">
//         <li>
//           <Link to="/" className="link">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/about" className="link">
//             Our Story
//           </Link>
//         </li>
//         <li>
//           <Link to="/find-us" className="link">
//             Find Us
//           </Link>
//         </li>
//         <li>
//           <Link to="/reviews" className="link">
//             Reviews
//           </Link>
//         </li>
//         <li className="menuItem">
//           <button onClick={toggleMenu} className="menuButton">
//             Menu ▼
//           </button>
//           {menuOpen && (
//             <ul className="dropdownMenu">
//               <li>
//                 <Link to="/menu/cakes" className="link">
//                   Cakes
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/menu/drinks" className="link">
//                   Drinks
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>
//         <li>
//           <Link to="/contact" className="contactButton">
//             Order Us
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor: "#4B727A"}}
>
      <Navbar.Brand style={{color: "#FFD700", fontFamily: 'Poppins', letterSpacing: '2px'}}>α Pastry & Bakery</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" className="link">Home</Nav.Link>
          <Nav.Link as={Link} to="/about" className="link">Our Story</Nav.Link>
          <Nav.Link as={Link} to="/find-us" className="link">Find Us</Nav.Link>
          <Nav.Link as={Link} to="/reviews" className="link">Reviews</Nav.Link>
          <Dropdown show={menuOpen} onClick={toggleMenu}>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="menuButton">
              Menu
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ backgroundColor: '#4B727A' }}>
              <Dropdown.Item as={Link} to="/menu/cakes" className="link">Cakes</Dropdown.Item>
              <Dropdown.Item as={Link} to="/menu/drinks" className="link">Drinks</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/contact" className="contactButton">Order Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
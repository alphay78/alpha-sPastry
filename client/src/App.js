import React from "react"; // Import React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router and Route components
import Home from "./components/HomeFolder/Home "; // Import Home component
import About from "./components/AboutFolder/About"; // Import About component
import NavBar from "./components/NavbarFolder/Navbar"; // Import NavBar component
import ReviewPage from "./components/ReviewPage/ReviewPage"; // Import ReviewPage component
import FindUs from "./components/FindUs/FindUs"; // Import Find Us component
import ContactUs from "./components/ContactUs/ContactUs"; // Import Contact Us component
// import Menu from "./components/Menu/Cake"; // Uncomment if Menu is needed
import Layout from "./lAYoUT.JS/Layout"; // Import Layout component
import Shared from "./components/Shared/Shared"; // Import Shared component for navigation
import Cake from "./components/Menu/Cake/Cake"; // Import Cake component
import Drink from "./components/Menu/Drink/Drink"; // Import Drink component
import AdminDashboard from "./components/AdminDashBoard/AdminDashBoard"; // Import Admin Dashboard component

const App = () => {
  return (
    <Router>
      {/* <NavBar /> Uncomment if NavBar should be displayed globally */}
      <Routes>
        <Route path="/" element={<Shared />}>
          <Route path="/" element={<Layout />} />{" "}
          {/* Render Layout at the root path */}
          <Route path="/about" element={<About />} /> {/* Render About page */}
          <Route path="/find-us" element={<FindUs />} />{" "}
          {/* Render Find Us page */}
          <Route path="/contact" element={<ContactUs />} />{" "}
          {/* Render Contact Us page */}
          <Route path="/menu" element={<Cake />} />{" "}
          {/* Render Cake component for general menu */}
          <Route path="/menu/cakes" element={<Cake />} />{" "}
          {/* Render specific Cakes menu */}
          <Route path="/menu/drinks" element={<Drink />} />{" "}
          {/* Render Drinks menu */}
          <Route path="/orders" element={<AdminDashboard />} />{" "}
          {/* Render Admin Dashboard for orders */}
          <Route path="/reviews" element={<ReviewPage />} />{" "}
          {/* Render Customer Reviews page */}
        </Route>
        {/* Added the ReviewPage route */}
      </Routes>
    </Router>
  );
};

export default App; // Export the App component

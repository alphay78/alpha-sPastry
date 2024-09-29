import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomeFolder/Home "; 
import About from "./components/AboutFolder/About"; 
import NavBar from "./components/NavbarFolder/Navbar"; 
import ReviewPage from "./components/ReviewPage/ReviewPage"; 
import FindUs from "./components/FindUs/FindUs"; 
import ContactUs from "./components/ContactUs/ContactUs";
// import Menu from "./components/Menu/Cake";
import Layout from "./lAYoUT.JS/Layout";
import Shared from "./components/Shared/Shared";
import Cake from "./components/Menu/Cake/Cake";
import Drink from "./components/Menu/Drink/Drink";
import AdminDashboard from "./components/AdminDashBoard/AdminDashBoard";


const App = () => {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Shared />}>
          <Route path="/" element={<Layout />} />
          <Route path="/about" element={<About />} />
          <Route path="/find-us" element={<FindUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/menu" element={<Cake />} />
          <Route path="/menu/cakes" element={<Cake />} />
          <Route path="/menu/drinks" element={<Drink />} />
          <Route path="/orders" element={<AdminDashboard />} />
          <Route path="/reviews" element={<ReviewPage />} />{" "}
        </Route>
        {/* Added the ReviewPage route */}
      </Routes>
    </Router>
  );
};

export default App;

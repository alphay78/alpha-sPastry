import React from 'react'
import Home from "../components/HomeFolder/Home ";
import About from "../components/AboutFolder/About";
import ReviewPage from "../components/ReviewPage/ReviewPage";
import FindUs from "../components/FindUs/FindUs";
import ContactUs from "../components/ContactUs/ContactUs";
import Reviews from "../components/ReviewPage/ReviewPage";

function Layout() {
  return (
    <div>
      <Home/>
      <About />
      <FindUs />
      <ReviewPage />
      <ContactUs />
    </div>
  )
}

export default Layout

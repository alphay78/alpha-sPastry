import React from "react"; // Import React
import Home from "../components/HomeFolder/Home "; // Import Home component
import About from "../components/AboutFolder/About"; // Import About component
import ReviewPage from "../components/ReviewPage/ReviewPage"; // Import ReviewPage component
import FindUs from "../components/FindUs/FindUs"; // Import FindUs component
import ContactUs from "../components/ContactUs/ContactUs"; // Import ContactUs component

function Layout() {
  return (
    <div>
      <Home /> {/* Render the Home component */}
      <About /> {/* Render the About component */}
      <FindUs /> {/* Render the Find Us component */}
      <ReviewPage /> {/* Render the Review Page component */}
      <ContactUs /> {/* Render the Contact Us component */}
    </div>
  );
}

export default Layout; // Export the Layout component

import React from "react"; // Import React library
import "./FindUs.css"; // Import CSS styles
import findUsImage from "../../assets/FindUs.jpg"; // Import background image

const FindUs = () => {
  return (
    <div className="find-us-page">
      {" "}
      {/* Main container for the page */}
      <div
        className="hero-section-findus flex justify-center items-center bg-center bg-fixed w-full h-[250px] lg:h-[370px] uppercase"
        style={{ backgroundImage: `url(${findUsImage})` }}
      >
        {" "}
        {/* Hero section with background image */}
        {/* <img src={findUsImage} alt="Find Us" className="hero-image-findus" /> */}{" "}
        {/* Optional image tag */}
        <div className="hero-overlay text-[44px] lg:text-[64px] text-white text-center font-bold">
          {" "}
          {/* Overlay for text */}
          <h1 className="hero-title-findus animate-fade-in">
            {" "}
            {/* Main title with animation */}
            The Sweetest Stop on Your Journey
          </h1>
          <p className="hero-subtitle-findus animate-fade-in">
            {" "}
            {/* Subtitle with animation */}
            Enjoy your stay at our cozy space and have the most comfy experience
            ever, spending quality time with friends, family, or yourself.
          </p>
        </div>
      </div>
      <div className="locations animate-slide-up">
        {" "}
        {/* Locations section with animation */}
        <h2 className="section-title">Our Locations</h2> {/* Section title */}
        <div className="location">
          {" "}
          {/* Individual location details */}
          <h3>Get Cozy at</h3>
          <p>ALPHA Sanford</p>
          <p>+251 941 000 022</p>
        </div>
        <div className="location">
          {" "}
          {/* Another location */}
          <h3>Go Social at</h3>
          <p>ALPHA Bole Atlas</p>
          <p>+251 900 989 898</p>
        </div>
        <div className="location">
          {" "}
          {/* Third location */}
          <h3>Take a Break at</h3>
          <p>ALPHA 4 Killo</p>
          <p>+251 900 898 989</p>
        </div>
      </div>
      <div className="opening-hours animate-slide-up">
        {" "}
        {/* Opening hours section with animation */}
        <h2 className="section-title">Opening Days & Hours</h2>{" "}
        {/* Section title */}
        <p>ALPHA Sanford & 4 Killo: Mon - Fri, 7:00 AM - 9:00 PM</p>{" "}
        {/* Opening hours for locations */}
        <p>ALPHA Bole Atlas: Mon - Fri, 7:00 AM - 10:00 PM</p>
        <p>All branches on Weekends: 6:00 AM - 11:00 PM</p>
      </div>
    </div>
  );
};

export default FindUs; // Export the component for use in other parts of the application

// src/components/About.js
import React from "react";
import "./About.css"; // Importing the CSS file for styling this component
import heroImage from "../../assets/hero-image.jpg"; // Importing the hero image to be used in the background

const About = () => {
  return (
    <div className="about-page">
      {/* Hero section with background image */}
      <div
        className="flex justify-center items-center bg-center bg-fixed w-full h-[250px] lg:h-[370px] uppercase"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <img src={heroImage} alt="Hero" className="hero-image" /> */}

        {/* Overlay text on the hero section */}
        <div className="text-[44px] lg:text-[64px] text-white text-center font-bold">
          <h1 className="hero-title">Our Story</h1>
          <p className="hero-subtitle">
            Discover the journey behind our passion.
          </p>
        </div>
      </div>

      {/* Content section describing the company's story */}
      <div className="content">
        {/* Section about the company's beginning */}
        <div className="section">
          <h2 className="section-title">The Beginning</h2>
          <p className="section-text">
            Our story begins with a love for baking and a dream to create
            something extraordinary. From our humble beginnings to becoming a
            cherished bakery, every step has been driven by our passion.
          </p>
        </div>

        {/* Section about the company's mission */}
        <div className="section">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            We strive for perfection in every bite. Our mission is to bring joy
            and delight to our customers through exceptional quality and unique
            flavors.
          </p>
        </div>

        {/* Section about the company's values */}
        <div className="section">
          <h2 className="section-title">Our Values</h2>
          <p className="section-text">
            We value integrity, creativity, and excellence. Our commitment to
            these values ensures that every product we create is crafted with
            love and care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

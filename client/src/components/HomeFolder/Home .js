import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Home.css";

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate(); // Create a navigate function

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true); // Show content after 1 second
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleExploreClick = () => {
    // Navigate to the About page
    setTimeout(() => navigate("/about"), 300); // Adding a slight delay for smooth transition
  };

  return (
    <div className="home-container">
      <div className={`home-content ${showContent ? "show" : ""}`}>
        <h1 className="title">Welcome to</h1>
        <h2>Alpha</h2>
        <h3>Patisserie & Bakery</h3>
        <button className="explore-button" onClick={handleExploreClick}>
          Explore Alpha
        </button>
      </div>
    </div>
  );
};

export default Home;

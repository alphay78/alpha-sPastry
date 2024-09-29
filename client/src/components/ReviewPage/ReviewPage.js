import React from "react"; // Import React
import ReviewSlideshow from "./ReviewSlideshow"; // Import the ReviewSlideshow component
import "./ReviewPage.css"; // Import the associated CSS file

const ReviewPage = () => {
  return (
    <div>
      <h1>Customer Reviews</h1> {/* Main heading for the review page */}
      <ReviewSlideshow /> {/* Render the slideshow of customer reviews */}
    </div>
  );
};

export default ReviewPage; // Export the ReviewPage component

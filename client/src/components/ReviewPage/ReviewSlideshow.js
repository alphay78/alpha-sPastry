import React from "react"; // Import React
import Slider from "react-slick"; // Import the Slider component from react-slick
import "./ReviewPage.css"; // Import the associated CSS file

// Array of customer reviews
const reviews = [
  "Amazing ambiance—the best café setting in Addis.",
  "So gorgeous and calming. It makes me want to stay.",
  "A place to be.",
  "I’d like more fasting cake variety, like apple pie and fruit tart.",
  "ALPHA croissant, excellent.",
  "If you have some food for diabetic clients and other special needs, that would be great.",
  "I highly recommend this place.",
  "I love the white and dark chocolate muffins.",
  "Some ALPHA bees.",
  "Vegetable focaccia is my favorite. It is perfect.",
  "Alpha makes us feel at home. She is so good at her job.",
  "The best in town.",
];

const ReviewSlideshow = () => {
  // Slider settings for autoplay and appearance
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
  };

  return (
    <div className="reviews-slideshow">
      {" "}
      {/* Container for the slideshow */}
      <h1 className="reviews-title">What Our Customers Say</h1>{" "}
      {/* Title of the review section */}
      <Slider {...settings}>
        {" "}
        {/* Slider component with specified settings */}
        {reviews.map(
          (
            review,
            index // Map through reviews to create slides
          ) => (
            <div key={index} className="review-card">
              {" "}
              {/* Individual review card */}
              <p className="review-text">"{review}"</p> {/* Review text */}
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

export default ReviewSlideshow; // Export the ReviewSlideshow component

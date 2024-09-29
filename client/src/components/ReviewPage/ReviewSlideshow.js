import React from "react";
import Slider from "react-slick"; 
import "./ReviewPage.css"; 

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="reviews-slideshow">
      <h1 className="reviews-title">What Our Customers Say</h1>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <p className="review-text">"{review}"</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSlideshow;

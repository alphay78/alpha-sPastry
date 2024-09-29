import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS for styling

import React from "react"; // Import React
import ReactDOM from "react-dom/client"; // Import ReactDOM for rendering
import "./index.css"; // Import custom CSS for the application
import "slick-carousel/slick/slick.css"; // Import Slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import Slick carousel theme styles

import App from "./App"; // Import the main App component

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root for rendering
root.render(
  <React.StrictMode>
    {" "}
    
    <App /> 
  </React.StrictMode>
);

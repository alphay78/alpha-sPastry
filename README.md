
                                                 🍰 Restaurant Website
Overview
Welcome to the Restaurant Website, a full-stack application designed to showcase a delightful pastry shop. This platform allows users to explore various cake options, place orders online, and provides an admin panel for managing orders and menu items.

🌟 Key Features

          A.User-Friendly Interface:

Intuitive navigation with a responsive design.
                                                                                                                                                                        
          B.Online Ordering:

Browse and order cakes directly from the menu.
                                                                                                                                                                         
           C.Admin Panel:

Manage orders and update menu items efficiently.
                                                                                                                                                                      
            D.Database Integration:

Utilizes PostgreSQL to store and manage all relevant information.
                                                                                                                                                                           
                       ⚙️ Technology Stack
1.Frontend
React: A powerful JavaScript library for building interactive user interfaces.
Tailwind CSS: A utility-first CSS framework for rapid styling and responsive design.
Bootstrap: A front-end framework providing pre-built components and grid systems for a clean layout.

2.Backend
Node.js: A JavaScript runtime for developing scalable server-side applications.
Express.js: A web framework for Node.js, streamlining the development of APIs.

3.Database
PostgreSQL: An open-source relational database management system for robust data storage.
Additional Libraries
CORS: Middleware for enabling Cross-Origin Resource Sharing.
Body-parser: Middleware for parsing incoming request bodies.

-I Have created one table to accept orders. The Query is commented in db.js file.

CREATE TABLE OurOrders (
    order_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    cake_type VARCHAR(50) NOT NULL,
    cake_size VARCHAR(20) NOT NULL,
    order_date DATE NOT NULL
);



# Travlr-Getaways

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![Node.JS](https://img.shields.io/badge/node.js-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

## Overview
Travlr Getaways is a full-stack web application designed for seamless travel booking and management. Built utilizing the MEAN stack (MongoDB, Express.js, Angular, Node.js), the system is divided into two distinct applications to optimize performance, security, and usability:
- Customer Portal: Developed using the Model-View-Controller (MVC) pattern, providing users with a platform to create accounts, search travel packages, book reservations, and track itineraries.
- Administrative Dashboard: A Single Page Application (SPA), allowing staff to efficiently manage customer data, trip packages, and pricing dynamically without full page reloads thanks to Angular.


Both share a common REST API (`app_api/`) backed by MongoDB.

You can view the full Software Design Doc here: [Design Doc](https://github.com/crestongetz/Travlr-Getaways/blob/29d313213b0796eab52a46aa5a834dff060261d2/images/Travlr%20Software%20Design%20Document.pdf)

## Getting Started
To run, you will need:
- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) running locally on the default port
- [Angular CLI](https://angular.io/cli) v17 (for the SPA only): `npm install -g @angular/cli`

### After downloading the necessary software, do the following:
1. Run `git clone https://github.com/crestongetz/Travlr-Getaways.git`
1. Ensure an .env file is present; this project requires one, and it was not published here for good practice. Put it in the project root `JWT_SECRET=your_secret_here`
2. Ensure MongoDB is running and on the default port
3. (Optional) If you want the initial trip data to show without having to add it manually, use the `app_api/seed/trips.js` file

### How to Run Express MVC
1. Ensure npm is downloaded in the project root
2. Run `npm start` in the project root
3. The server will start on **http://localhost:3000**
4. Visit that URL on any web browser
![Picture of Express MVC Home](https://github.com/crestongetz/CS-465-Full-Stack-Development/blob/a12258cbada397051f28a951a71cae17a2060785/images/Express%20App%20Home.png)

### How to Run Angular SPA
1. Open a new terminal (the SPA makes API calls to the Express backend)
1. From the project root, go to the `app/admin` directory by running `cd app_admin`
2. The necessary software should already be installed. Run `npm install` to be sure
3. Run `ng serve` to start the Angular application
4. The Angular application will start on **http://localhost:4200**
5. Visit that URL in any web browser
![Picture of Angular SPA Home](https://github.com/crestongetz/CS-465-Full-Stack-Development/blob/2b40d7b2a2d9fc1e3a7c6910cd1d7a61b4fe6841/images/Angular%20SPA%20Home.png)


## Architecture
```
travlr/
├── app.js              # Express app entry point
├── bin/www             # HTTP server bootstrap
├── app_server/         # MVC: Handlebars views, server-side routes
├── app_api/            # REST API: routes, controllers, models
│   ├── config/         # Passport JWT config
│   └── models/         # Mongoose models + DB connection
├── app_admin/          # Angular 17 Admin SPA
│   └── src/app/        # Components, services, routing
└── public/             # Static assets (CSS, images)
```

Various frontend frameworks were used for the two applications. The Express MVC app utilizes HTML, CSS, and some JavaScript. The Angular SPA also uses HTML and CSS but makes heavy use of components, services, and routes, which are unique to Angular. The main difference between the two is where they are run. The HTML for the Express MVC is running on the server, while the Angular SPA will be sent and run on the user's web browser. **The flow of how data is shown to the user can be seen in the sequence diagram below:**

![Picture of Sequence Diagram](https://github.com/crestongetz/Travlr-Getaways/blob/9ca99ccf35afc888ff3e5f0ace876f0ec861aa32/images/Sequence%20Diagram_Travlr%20Getaways.png)

A NoSQL database (MongoDB) was used for its flexibility compared to SQL. MongoDB uses JSON, which is the standard form of communication for other parts of this application. JSON can be converted into JS objects and vice versa. Using a NoSQL database also makes future changes to the applications much easier. 

## Functionality & Development 

JSON is a text-based format to transfer data, while JavaScript is a comprehensive programming language with logic and functions. As mentioned above, JSON ties together the application by being universally compatible across the tools used. It acts as the translator and transport method for the front and backend of the application. When an admin in the SPA creates a new trip, an HTTP request is sent to the database, which will store it. And when the frontend needs data from the database, it sends a request, and the database will respond with JSON. JSON is language-independent, so it doesn't matter what language we use. It is also lightweight and fast. Having all requests in JSON improves maintainability and flexibility.

Throughout the development of this application, I refactored code to improve the user interface. One example can be seen in the screenshot for the Angular SPA above and below. When you log into the SPA, buttons to add a trip and edit an existing one will appear, but they will not appear if the user is not logged in. This reduces friction, improves security, and enhances user experience.
![Picture of Angular SPA while logged In](https://github.com/crestongetz/CS-465-Full-Stack-Development/blob/4be99ba98b0ee438a9c8208ab9689a2b52cd22ff/images/SPA%20while%20logged%20in.png)

On top of developing for user experience, I built the application with as many reusable interface components as possible. For example, in the Express MVC app, the header and footer are built using Handlebars, which allows us to add a few lines to any HTML file rather than all the code for it. Using reusable UI components is extremely beneficial for maintainability, flexibility, and future updates or changes.

## Testing
API endpoints are critical for both parts of the application. Ensuring that the endpoints work as expected and are secure is important. Throughout the development of the application, **Postman** was used to test all of the API endpoints. Postman offers a feature that allows me to test the endpoints that I added authentication to by using a JWT. The JWT tokens for this application are created when a user creates an account or logs in and will last one hour. Each of the endpoints uses an HTTP request to identify what action needs to be taken. For example, a GET request indicates something is going to be retrieved or sent, such as a trip.


| Method | URL | Purpose | Notes |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/trips` | Get a list of all the trips | Returns a list of all Trips |
| `GET` | `/api/trips/:tripCode` | Filter the trips and only get one trip by its code | Returns a single trip identified by the trip code inside the URL |
| `POST` | `/api/trips` | Adds a trip to the database | Send JSON to database. User must be logged in (JSON web token) |
| `PUT` | `/api/trips/:tripCode` | Edits the trips in the database | Send JSON to Database. Requires user to be logged in (JSON web token) |
| `POST` | `/api/register` | Registers a new user | Creates a JSON web token on success. Hashes the password. |
| `POST` | `/api/login` | Logs in an existing user | Checked email and password hash and created a JSON web token upon valid login. |



Testing the `GET` endpoints `/api/trips` and `/api/trips/tripcode` was straightforward, as all they do is return one or many trips and require no authentication. 

Testing the `POST` `/api/trips` endpoint required using a generated JSON Web Token (JWT) to simulate a logged-in state. This `POST` method sends JSON data to the database to append a new trip, powering the "Add Trip" functionality within the Single Page Application (SPA). 

The `/api/trips/:tripcode` endpoint handles trip modifications and similarly mandates a valid JWT. This route was verified via Postman and through the "Edit Trip" interface in the SPA.

Finally, the `/api/register` and `/api/login` endpoints facilitate user account creation and authentication to provision JWTs. These authentication flows were validated using Postman alongside the SPA's built-in login and sign-out components. They share a significant amount of underlying logic, meaning a user currently requires their name to authenticate, though this behavior can be refactored in future iterations. 

Throughout development, DBeaver was utilized to monitor database state and guarantee data integrity across all transactions.


## Future Improvements
1. Improve the UI for both applications for production
2. Integrate security into more parts
3. Make the client-side application more dynamic
4. Add more features to the Admin SPA 

## Reflection
This course and project have significantly improved my professional and personal development. By creating a web application, I gained an understanding of end-to-end system design, including database management, real-world API development, and testing. A critical milestone was implementing authentication and security protocols to safeguard both web endpoints and user data.

Learning how RESTful APIs and modern frontend-backend work helped me bridge the gap between theory and practical, production-ready software engineering. While full-stack development is vast, this experience has given me the technical foundation and self-reliance to confidently design, build, and troubleshoot complex applications independently. Moving forward, I am eager to leverage what I have learned to either drive innovation within an established enterprise or in a fast-paced environment.

# CS-465-Full-Stack-Development

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

## Getting Started
To run, you will need:
- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) running locally on the default port
- [Angular CLI](https://angular.io/cli) v17 (for the SPA only): `npm install -g @angular/cli`

### After downloading the necessary software, do the following:
1. Run `git clone https://github.com/crestongetz/CS-465-Full-Stack-Development.git`
1. Ensure an .env file is present; this project requires one, and it was not published here for good practice. Put it in the project root `JWT_SECRET=your_secret_here`
2. Ensure MongoDB is running and on the default port
3. (Optional) If you want the initial trip data to show without having to add it manually, use the `app_api/seed/trips.js` file

### How to Run Express MVC
1. Ensure npm is downloaded in the project root
2. Run `npm start` in the project root
3. The server will start on **http://localhost:3000**
4. Visit that URL on any web browser
![Picture of Express MVC Home](https://private-user-images.githubusercontent.com/167683310/611807199-3adc0dce-08be-41e9-bacc-a7434055c1f8.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODIyMTcyOTgsIm5iZiI6MTc4MjIxNjk5OCwicGF0aCI6Ii8xNjc2ODMzMTAvNjExODA3MTk5LTNhZGMwZGNlLTA4YmUtNDFlOS1iYWNjLWE3NDM0MDU1YzFmOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNjIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDYyM1QxMjE2MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iNDRlODJiZWQ1YzA1NzEzZDU0ZmViMjA0MTVmNWU0YmNkYzE1MGZjMDJiYWZiZjViOGNhMjA4MTU0ZDlhMjVhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.WJlU-SmnRf5vCb1cyjZzNtKhSb0QjqDx6Po-T4bhf3U)

### How to Run Angular SPA
1. Open a new terminal (the SPA makes API calls to the Express backend)
1. From the project root, go to the `app/admin` directory by running `cd app_admin`
2. The necessary software should already be installed. Run `npm install` to be sure
3. Run `ng serve` to start the Angular application
4. The Angular application will start on **http://localhost:4200**
5. Visit that URL in any web browser
![Picture of Angular SPA Home](https://private-user-images.githubusercontent.com/167683310/611807294-6b0b38e1-46d7-45e8-9728-806dea85747c.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODIyMTcyOTgsIm5iZiI6MTc4MjIxNjk5OCwicGF0aCI6Ii8xNjc2ODMzMTAvNjExODA3Mjk0LTZiMGIzOGUxLTQ2ZDctNDVlOC05NzI4LTgwNmRlYTg1NzQ3Yy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNjIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDYyM1QxMjE2MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hMTA0ZGU3ZWJkNDE1NzIzZmU2OGQ0YmZmOTNhYmZjM2NmMzBlYmU3YThkOGNiNDk1MzBiZWEyOWUzMGUxYmJiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.U9S7l4ZG5PwiWgNR0FXuLovR33FuziIi_jktfq-sSbE)


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

Various frontend frameworks were used for the two applications. The Express MVC app utilizes HTML, CSS, and some JavaScript. The Angular SPA also uses HTML and CSS but makes heavy use of components, services, and routes, which are unique to Angular. The main difference between the two is where they are run. The HTML for the Express MVC is running on the server, while the Angular SPA will be sent and run on the user's web browser. 
A NoSQL database (MongoDB) was used for its flexibility compared to SQL. MongoDB uses JSON, which is the standard form of communication for other parts of this application. JSON can be converted into JS objects and vice versa. Using a NoSQL database also makes future changes to the applications much easier.

## Functionality & Testing

As mentioned above, JSON ties together the application by being universally compatible across the tools used. It acts as the translator and transport method for the front and backend of the application. When an admin in the SPA creates a new trip, an HTTP request is sent to the database, which will store it. And when the frontend needs data from the database, it sends a request, and the database will respond with JSON. JSON is language-independent, so it doesn't matter what language we use. It is also lightweight and fast. Having all requests in JSON improves maintainability and flexibility.

Throughout the development of this application, I refactored code to improve the user interface. One example can be seen in the screenshot for the Angular SPA above and below. When you log into the SPA, buttons to add a trip and edit an existing one will appear, but they will not appear if the user is not logged in. This reduces friction, improves security, and enhances user experience.
![Picture of Angular SPA while logged In](https://private-user-images.githubusercontent.com/167683310/611820302-b2d6fa0d-ff26-4dfa-a1c3-83b05e6b4c8d.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODIyMTg1MTAsIm5iZiI6MTc4MjIxODIxMCwicGF0aCI6Ii8xNjc2ODMzMTAvNjExODIwMzAyLWIyZDZmYTBkLWZmMjYtNGRmYS1hMWMzLTgzYjA1ZTZiNGM4ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNjIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDYyM1QxMjM2NTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zNTM4NmJkMzcxOGRiNDRiZjgxNjNkMjYxMzZkMzNmNjA1MzlhOGNiMTE4YTEyYjc1NDNhNjZlMzc1NmU1YTcwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.QEWWEWATuispvsSCjUnDLWmRV1Wa6n7WiFFnsZeO_iU)


## Future Improvements 

## Reflection

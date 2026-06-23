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

### How to Run Angular SPA
1. Open a new terminal (the SPA makes API calls to the Express backend)
1. From the project root, go to the `app/admin` directory by running `cd app_admin`
2. The necessary software should already be installed. Run `npm install` to be sure
3. Run `ng serve` to start the Angular application
4. The Angular application will start on **http://localhost:4200**
5. Visit that URL in any web browser



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

## Functionality & Testing


## Future Improvements 

## Reflection

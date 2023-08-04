# Hogwarts Adminstration

I hope you enjoy!

## Getting started

1. Fork and clone this repo.
2. `npm install`.
3. `npm run start` - use `npm run start-server` and `npm run build-watch` seperately if on windows
4. name your database "final-project"
5. Run `npm run seed` to check DB connection and seed DB.

## Deployment

The project is deployed on Heroku, a cloud platform that allows easy deployment and hosting of web applications. The live version of the project can be accessed at [Link to Heroku App](https://hogwartsschool-156e68ebb527.herokuapp.com/).

To deploy the project to Heroku, the following steps were taken:

1. Create a Heroku account and install the Heroku CLI (Command Line Interface) on your local machine.
2. Initialize a Git repository for the project and commit all changes.
3. Use the Heroku CLI to create a new Heroku app and link it to the Git repository.
4. Set up environment variables and configurations required for the project to run on Heroku.
5. Deploy the app to Heroku by pushing the Git repository to the Heroku remote.

Once deployed, Heroku automatically builds and hosts the application, making it accessible to users over the internet.

## Details

### The Premise

The project revolves around creating a RESTful web platform that allows the management of students and campuses. The context of the project is based on the fictional world of "Harry Potter," where you play the role of the Chief Technology Officer (CTO) of a company responsible for managing magical campuses and enrollments.

## Functionality Overview:

1. Managing Students: The platform allows the management of student information. This likely includes functionalities like adding new students, updating existing student details, viewing student profiles, and possibly removing students.
2. Managing Campuses: The platform enables the management of magical campuses. Similar to student management, this would include features like adding new campuses, updating campus information, viewing campus details, and potentially deleting campuses.
3. Integration of Technologies: The backend of the platform is built using Express, a popular Node.js web framework for handling HTTP requests. Sequelize, an ORM (Object-Relational Mapping) library, is utilized to interact with the database, making it easier to work with the data.
4. Frontend Development: The frontend of the platform is built using React, a popular JavaScript library for building user interfaces. Redux, along with React-Redux, is used to manage important state related to students and campuses, ensuring that the data is efficiently handled across the application.

## Client-side Libraries:

Apart from the core technologies mentioned above, the project also requires the use of additional client-side libraries:

- Redux Toolkit: Redux Toolkit is a package that simplifies working with Redux by providing utilities like creating slices and configuring the Redux store.

- Redux Thunks: Redux Thunks are a middleware that allows writing asynchronous logic in Redux actions, which is useful for making API requests and handling side effects.

- React-Router-Dom (v6): React Router is used for managing navigation in a React application. Version 6 is the latest iteration of React Router.

- Axios: Axios is an HTTP client library used to make API requests to the backend server from the frontend.

## Project Execution:

When a user interacts with the web platform, they can perform CRUD (Create, Read, Update, Delete) operations on both students and campuses. The frontend components that display student and campus data are connected to the Redux store to access and update the relevant information.

For example, when a user wants to view a list of students, a request is made from the frontend to the backend server using Axios. The server, built with Express and Sequelize, queries the database for the student data and sends it back to the frontend. The frontend, using React and Redux, then updates the relevant components to display the fetched student data.

Similarly, adding or updating a student/campus triggers the necessary actions in the frontend, which in turn communicate with the backend to persist the changes in the database.

Overall, the web platform acts as a central system for managing and organizing students and campuses in the magical world, providing a user-friendly interface for CTOs and administrators to handle enrollments and campus-related tasks efficiently.

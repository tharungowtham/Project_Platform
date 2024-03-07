# Knowledge Sharing Platform

## Overview
This project is a knowledge sharing platform built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to share resources, articles, and knowledge with others. The platform includes user and admin roles for managing content and users.

## Features
- User authentication and authorization system.
- Separate user and admin roles with different permissions.
- CRUD (Create, Read, Update, Delete) operations for resources and articles.
- Easy project downloading for sharing and collaboration.

## Technologies Used
- **MongoDB**: NoSQL database for storing user data, articles, and resources.
- **Express.js**: Web application framework for building the backend API.
- **React.js**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime environment for executing server-side code.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **Bootstrap**: Frontend framework for responsive design.

## Usage
1. Clone the repository: `git clone https://github.com/your_username/knowledge-sharing-platform.git`
2. Install dependencies:
    cd knowledge-sharing-platform
    npm install
    cd client
    npm install
3. Configure MongoDB connection in `config/db.js`.
4. Run the server: `npm run server`
5. Run the client: `npm run client`
6. Access the platform in your browser at `http://localhost:3000`

## Admin Role
- Admins have access to additional functionalities such as managing users, articles, and resources.
- Admins can perform CRUD operations on articles and resources.
- Admins can manage user accounts, including banning or deleting users if necessary.

## Downloading the Project
1. Clone the repository as mentioned in the "Usage" section.
2. Ensure you have MongoDB installed and running.
3. Install dependencies for both server and client.
4. Configure the database connection.
5. Run the server and client to start the application.

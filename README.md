# easyMedia

## Description
This is a simple social media application including a login and registration page, and a page to create and view all posts and own posts. 

This project includes a frontend and a backend. The frontend is built using Angular and the backend is built using Node.js and Express. The database used is PostgreSQL.    

## Installation
### Prerequisites
- Node.js
- PostgreSQL

### Steps
1. Clone the repository
2. Install dependencies
    - Navigate to the frontend directory and run `npm install`
    - Navigate to the backend directory and run `npm install`
3. Create a database in PostgreSQL
4. Create a .env file in the backend directory and add the following variables:
    - DB_HOST
    - DB_PORT
    - DB_NAME
    - DB_USER
    - DB_PASSWORD
    - JWT_SECRET
5. Run the backend server
    - Navigate to the backend directory and run `npm start`
6. Run the frontend server
    - Navigate to the frontend directory and run `npm start`
7. Navigate to http://localhost:4200/ in your browser

## Usage
Please refer to the [Usage](./backend/README.md#usage) section in the __backend__ README.md file for information on how to use the backend in detail.

Please refer to the [Usage](./frontend/README.md#usage) section in the __frontend__ README.md file for information on how to use the frontend in detail.

## License
This project is licensed under the terms of the MIT license.
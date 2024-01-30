# EasyMedia API
## Description
This is the backend of the EasyMedia project. It is a REST API that allows you to create, read, update, and delete posts. It also allows you to register and authenticate users. The API is built using Node.js and Express. The database used is PostgreSQL.

## Installation
### Prerequisites
- Node.js
- PostgreSQL

### Steps
1. Clone the repository
2. Install dependencies
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
6. Navigate to http://localhost:3000/ in your browser
7. Use the API

## Routes
### Authentication
- POST /api/auth/register
- POST /api/auth/login

### Posts
- GET /api/posts
- GET /api/posts/:id
- POST /api/posts
- PUT /api/posts/:id
- DELETE /api/posts/:id



## Used Technologies
- Node.js [https://nodejs.org/en/](https://nodejs.org/en/)
- Express [https://expressjs.com/](https://expressjs.com/)
- PostgreSQL [https://www.postgresql.org/](https://www.postgresql.org/)
- Sequelize [https://sequelize.org/](https://sequelize.org/)
- JWT [https://jwt.io/](https://jwt.io/)
- Bcrypt [https://www.npmjs.com/package/bcrypt](https://www.npmjs.com/package/bcrypt)
- Nodemon [https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon)
- Cors [https://www.npmjs.com/package/cors](https://www.npmjs.com/package/cors)
- Cookie-parser [https://www.npmjs.com/package/cookie-parser](https://www.npmjs.com/package/cookie-parser)
- Hbs [https://www.npmjs.com/package/hbs](https://www.npmjs.com/package/hbs)
- Helmet [https://www.npmjs.com/package/helmet](https://www.npmjs.com/package/helmet)
- Morgan [https://www.npmjs.com/package/morgan](https://www.npmjs.com/package/morgan)

## License
This project is licensed under the terms of the MIT license.
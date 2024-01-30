## Description
This is a simple social media application that allows users to create posts and view posts from other users. The application is mobile-only and was built using Angular.


#Section 1: Authentication

This section covers the login and registration pages. For the registration page, the user is required to provide a username, email, and password. The username should accept only text and spaces, while the email should be a valid email address. The password must be at least 8 characters long. For the login page, the user must provide their email and password. If the authentication fails, an error message will be displayed below the Sign In button.


#Section 2: Application

This section covers the application pages. After logging in, the user will have access to three modules: Create Post, View My Posts, and View All Posts. Each module has a specific URL that can be accessed either by typing the URL directly into the browser or by clicking on the links in the navbar. The navbar also contains the user's name and links to log out.

The Create Post module allows the user to create a post. The user will see a card in the bottom portion of the screen that updates as they write, displaying the title, message, author name, date, and time. When the post is created, a success or error modal will be displayed.

The View My Posts page allows the user to filter their posts by date. The user can select a date, and the page will display only the posts that were created on that date. The page also has a pagination feature that displays a maximum of three posts per page. If there are no posts for the selected date, a message will be displayed.

The View All Posts page is similar to the View My Posts page, but it allows the user to filter posts by all users and by date. The user can select one or both filters, and the page will display the posts that match the criteria.

**Note:**
 The application is mobile-only, but the candidate is free to implement the desktop version as well.

## Installation
### Prerequisites
- Node.js
- PostgreSQL

### Steps
1. Make sure d that the PostgreSQL server is running as well as the Node.js server.
2. Install dependencies
    - Navigate to the frontend directory and run `npm install`
3. Navigate to http://localhost:4200/ in your browser

## Usage
Please refer to the [Usage](./frontend/README.md#usage) section in the frontend README.md file for information on how to use the frontend in detail.

## Used Technologies
- Angular [https://angular.io/](https://angular.io/)
- TypeScript [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
- HTML [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- CSS [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- Tailwind CSS [https://tailwindcss.com/](https://tailwindcss.com/)

## License
This project is licensed under the terms of the MIT license.
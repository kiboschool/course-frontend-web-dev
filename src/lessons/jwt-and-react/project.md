# Project

## Project Description

In this project, you will refactor your Pokedex application by implementing an authentication flow using JSON Web Tokens (JWT). Only authenticated users should be able to access the Pokedex app. You will use React and a mock API endpoint for user authentication and management of user sessions.

## Learning Objectives

- To understand and implement a JWT-based authentication flow in a React application.
- To understand and implement protected routes with React Router.
- To manage global state using React Context.
- To fetch and display user-specific data based on the JWT.
- To get practical experience implementing a logout feature and managing user sessions.

## Project Milestones

Using the previous project as guide, implement the following milestones in your pokemon app.

1. **Creating Login Logic**: Implement the function to send a `POST` request with the email and password from your form to authenticate users. The authentication server only responds to two sets of credentials:

```ascii
email: coolemail@gmail.com
password: 123123

email: anotheremail@gmail.com
password: 098098

```

1. **Implementing Protected Routes**: Implement a protected route for the Pokedex app that only allows access to authenticated users.
2. **Managing Global State with Context**: Use React Context to manage the global state of your application (JWT, pokemon list, selected pokemon, etc)
3. **Logout Functionality**: Implement a logout feature in the `NavBar.jsx` that should remove the JWT token and deauthenticate the user, subsequently revoking access to the Pokedex app.

## Bonus Milestones

1. **Token Refresh**: Implement a token refresh feature in your application that automatically refreshes the JWT token when it's about to expire.
2. **Form Validation**: Implement form validation for your login form. This could include things like required fields, minimum/maximum length, valid email format, etc.
3. **Error and Loading States**: Implement error and loading states for your user authentication and data fetching processes.
4. **More Complex Routing**: Implement more complex routing, such as nested routes or conditional rendering based on the path.
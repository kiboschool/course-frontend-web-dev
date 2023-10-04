# Exercise: Get JWT

## Instructions

1. Set up your React application.

    Start by setting up a new React application using Create React App or another tool of your choice.

2. Create a Login Component.

    This component should contain a form with fields for a username and password, and a button to submit the form.

3. Submit Form Data.

    When the user submits the form, send the form data in a POST request to the `/user` endpoint.

4. Handle Server Response.

    If the username and password are correct, the server will respond with a JWT. Save this token in your application. This could be in the component state or a global state management system like Redux or Context.

5. Store the JWT.

    Consider using a browser storage system like LocalStorage or SessionStorage to save the JWT. This way, if the user refreshes the page, the token won't be lost.

6. Authenticated Requests.

    Use the stored JWT to authenticate future requests to your server. You will need to include the token in the `Authorization` header of your HTTP requests.

7. Create Protected Routes.

    Use React Router to create protected routes. These routes should only be accessible if a user is authenticated (i.e. if a JWT exists).

8. Logout Functionality.

    Add a logout button or link that, when clicked, removes the JWT from storage and un-authenticates the user.

9. Test Your Application.

    Test your application thoroughly. Make sure that only authenticated users can access protected routes and that logging out properly un-authenticates the user.
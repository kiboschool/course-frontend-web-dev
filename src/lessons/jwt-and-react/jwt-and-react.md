# Jwt and react

After all the theoretical introduction is time to see how we do this JWT auth implementation in react:

## Step 1: User submits login information

This typically happens in a login form, where users enter their username/email and password.

```jsx
import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    // ADD LOGIC TO LOGIN HERE
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder='Username'
      />
      <input
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder='Password'
      />
      <button type='submit'>Log in</button>
    </form>
  )
}
```

## Step 2: Post login information to API

Upon form submission, the app should post the username and password to the API.

```jsx
import axios from 'axios';

try{
      const { data } = await axios.post(
				'http://localhost:3000/session',  
				{ email, password } );
      setToken(data.token)
      navigate('/profile')
}
catch(err){
      console.error(err)
      alert('some thing went wrong, check your console logs request/response')
}
```

## Step 3: Include JWT in future API requests

With the JWT stored, the app can now include it in the header of future API requests to authenticate the user.

```jsx
try{
   const bearer_token = `Bearer ${token}`;

   const config = {
      headers: {
        Authorization: bearer_token
      }
   };

  const { data: posts } = await axios.get('http://localhost:3000/posts', config)
        setPosts(posts)
  }
  catch(err){
    console.error(err)
    alert('Could not fetch posts, check your logs')
}
```

## Step 5: Protect Routes

With user authentication status, we can protect certain routes that should be accessible only to authenticated users.

```jsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../App";

export default function PrivateRoute({ children }) {
    const { token } = useContext(AppContext);

    if (!token) {
        return <Navigate to="/" replace />;
    }
    
    return children;
}
```

## Step 6: Logout

To log out, simply remove the token from storage and update the authenticated status.

```jsx
function logout() {
  localStorage.removeItem('token');
  setAuthenticated(false);
}
```
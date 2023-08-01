# Protected Routes

In single-page applications, certain routes should **only** be accessible to users who are authenticated (logged in), and these are called protected routes.

That means, in a React app, we will have some routes that will be only available to logged in users. (Like a profile detail page). The routing would look like this:

```jsx
<BrowserRouter>
  <Routes>
        <Route path="public" element={<Login />} />
            <Route
                path="private"
                element={  
                    <PrivateRoute>
                    <Profile />
                </PrivateRoute>
            }
        />
    </Routes>
</BrowserRouter>
```

Notice the `PrivateRoute` component. The `Profile` component will only be accessible to authenticated users. This component takes a `element` prop and render this prop only if the user is logged in.

Here is a basic way of setting up the `ProtectedRoute` component:

```jsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../App";

export default function PrivateRoute({ children }) {
    const { token } = // get token from any source (context,)

    /** this lines makes the magic */
    if (!token) {
        return <Navigate to="/" replace />;
    }
    
    return children;
}
```

If the user is authenticated, we render the component passed as a prop ( children ). If the user isn't authenticated, we use `<Navigate>` to redirect the user to a home page.
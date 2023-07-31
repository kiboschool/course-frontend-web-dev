# What is react router

You probably noted a problem in your apps, they are just used in one page. But in a normal website navigation, there are multiple pages. 

In this lecture we will explore how to implement this multi navigation flow in a React application

## Why do we need to learn it as a separate lesson?

In single-page applications (SPAs), such as those created with React, the entire page is loaded in the browser after the initial request, and then subsequent views are handled without any need for a page refresh. This makes these applications fast and seamless to navigate, providing a more fluid user experience. But without a full page refresh, how can we handle different views or pages in our React application? **This is where React Router comes in.**

React Router is a standard library for routing in React. It allows you to set up routes that correspond to different components in your application. In essence, it provides the navigation functionality that we're used to in multi-page applications, but without the page reloads.

## Why Do We Need a Router?

1. **Better User Experience**: React Router allows users to navigate through the application without page reloads, offering a smoother and more interactive user experience.
2. **Improved Performance**: Since only the necessary components are rendered rather than the entire page, using React Router often results in improved performance.
3. **Simpler Code Organization**: React Router helps you structure your application in a clear and intuitive way. Each route corresponds to a specific component, which simplifies the understanding of your application's structure.

## Benefits of Using React Router

1. **Dynamic Routing**: React Router handles dynamic routing out of the box, making it easy to create complex routes and URL parameters.
2. **Nested Routes**: It also supports nested routes, meaning you can have views within views, which is a common requirement in complex applications.
3. **Transition Effects**: React Router allows for transition effects when moving between routes, enhancing user experience.
4. **Redirects and 404 handling**: It makes it easy to set up redirects, handle 404s, and protect routes based on authentication or other criteria.

## Adding React Router to a Vite-React Project

To add React Router to your Vite project, you first need to install it using npm or yarn:

```bash
npm install react-router-dom
```

Then, you import the necessary components from `react-router-dom` and set up your routes in your main application component:

```jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;

```

In this example, we have two routes: the root route ("/") which renders the Home component, and the "/about" route which renders the About component. The `Switch` component is used to render only the first `Route` that matches the current location.

## Understanding <Router/> , <Switch/> and <Route/>

React Router provides several key components to create a routing system in your React applications:

### `<Router>`

The `<Router>` component is the main component that wraps your entire application. This component creates a history object, which keeps track of the current location and re-renders the application whenever this location changes. There are a few different kinds of routers provided by React Router, but the one you'll use most often is the `<BrowserRouter>`, which uses the HTML5 history API to keep your UI in sync with the URL.

### `<Switch>`

The `<Switch>` component is used to render only the first `<Route>` or `<Redirect>` that matches the current location. This is important because without `<Switch>`, multiple routes could match a URL and render at once, which is generally not what you want.

For example, consider the following routes:

```jsx
<Route path="/about">
  <About />
</Route>
<Route path="/">
  <Home />
</Route>
```

Without a `<Switch>`, both the About and Home components would render when the user navigates to "/about", because "/" matches every URL. With a `<Switch>`, only the About component will render, because it is the first matching route.

### `<Route>`

The `<Route>` component is perhaps the most important component in React Router. This component renders some UI when the current location matches the route's path. When a `<Route>` matches the current URL, it renders its children (usually a component).

```
<Route path="/about">
  <About />
</Route>

```

In this example, the `<About />` component will be rendered when the URL is "/about". If you want to render a component only when the path is exactly the same as the URL, you can use the `exact` prop:

```jsx
<Route exact path="/">
  <Home />
</Route>
```

In this case, the `<Home />` component will only be rendered if the URL is exactly "/".
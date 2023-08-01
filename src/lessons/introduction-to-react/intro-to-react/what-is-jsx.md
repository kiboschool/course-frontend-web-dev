# What is JSX

JavaScript XML (JSX) is a unique syntax extension introduced by React that allows us to write JavaScript that looks like HTML.

## Why JSX?

JSX may seem strange at first, but it is a powerful tool that combines the best parts of JavaScript and HTML. With JSX, we can write components that are more readable and easier to understand at a glance.

Here are some benefits of JSX:

- **Familiar Syntax**: JSX's syntax is very similar to HTML, so it's easy to set up and get going quickly.
- **Inline Styles**: In JSX, you can create inline styles using JavaScript objects and camelCased properties.
- **Logic and Markup in One Place**: Because JSX is a part of JavaScript, you can mix logic and markup in your component files.

## Creating a React Component with JSX

In the project we just created

### 1. Delete all the contents of App.jsx

### 2. Writing Your Component

Now write the following code:

```jsx
import React from 'react';

function App() {
  return <h1>Hello, world!</h1>;
}

export default App;

```

What this does is it defines a new function `App`, which becomes our component. This function returns what we want to display in the browser - in this case, an `h1` tag with the text `Hello, world!`.

This is JSX! It looks like HTML, but it's actually JavaScript.

### 3. Checking the Result

If you now run your React app by typing `npm dev` in the terminal, you should see the text `Hello, world!` on your screen. 

Congratulations, you've just written your first React component using JSX!

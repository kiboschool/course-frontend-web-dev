# Class and Functional Components

React gives us the flexibility to define components either as a class or a function. So far, we have been using functional components in our examples, but class components are another tool at our disposal. In this article, we will explore the differences between functional and class components, and when to use one over the other.

## What are Functional Components?

Functional components in React are just JavaScript functions that accept props as an argument and return JSX. Here's an example of a functional component:

```jsx
function Welcome() {
  return <h1>Hello</h1>;
}
```

Since the introduction of Hooks in React 16.8, functional components can now manage state and handle side effects, which were previously exclusive to class components.

## What are Class Components?

A class component is a more feature-rich way to define a component in React. It's written as an ES6 class and extends from `React.Component`. Class components can handle state and lifecycle methods, amongst other things. Here's an example of a class component:

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}

```

## Functional vs Class Components: Main Differences

The primary differences between functional and class components come down to syntax and features. Here's a comparison:

1. **Syntax:** Functional components are simpler and easier to read and write, with less code than class components. Class components, on the other hand, require more boilerplate code, but offer more features out of the box.
2. **State and Lifecycle Methods:** Before React 16.8, class components were the only way to have local state and lifecycle methods. Now, with React Hooks, functional components can also use state and mimic lifecycle behavior.
3. `this` Keyword: In class components, the `this` keyword is used to access props, state, and methods. This can be confusing for JavaScript beginners. Functional components don’t require the `this` keyword

## When to Use Functional Components vs. Class Components

With the addition of Hooks, functional components can do everything class components can do and more. Therefore, many developers prefer functional components for most cases due to their simplicity and conciseness.

In our class, we will use most of the time functional components.

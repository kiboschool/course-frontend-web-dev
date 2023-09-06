# Components Lifecycle

When it comes to building applications with React, understanding the lifecycle of components is crucial. Whether you're fetching data, managing state, or handling side effects, knowing how and when components render and re-render is key.

## What is the Component Lifecycle?

In a React functional component, the lifecycle can be distilled down to three stages:

1. **Mounting:** The component is being created and inserted into the DOM.
2. **Updating:** The component is re-rendering as a result of changes to either its props or state.
3. **Unmounting:** The component is being removed from the DOM.

![Untitled](./components-lifecycle/untitled.png)

React provides the `useEffect` hook to handle these lifecycle stages in functional components.

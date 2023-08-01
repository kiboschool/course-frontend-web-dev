# Introduction to React Hooks

React Hooks are a significant feature introduced in the 16.8 version of React. They allow you to use state and other React features without writing a class component. They essentially let you `"hook into"` React state and lifecycle methods from function components. Prior to the introduction of hooks, these features were only available in class components, but hooks have enabled developers to write concise and readable code with function components.

## Why Do We Need Them?

Before hooks, developers had to switch between function components and class components depending on whether they needed to manage state or access lifecycle methods. This would often lead to inconsistency and confusion in the codebase. However, with hooks, developers can do everything with function components, allowing for a more cohesive codebase.

Furthermore, hooks allow developers to extract component logic into reusable functions, which promotes code reusability and organization.

## Examples and Use Cases

Hooks begin with the word **'use'**, which helps developers identify them in the codebase. The two primary hooks that come bundled with React are `useState` and `useEffect`.

1. **useState:**

    The `useState` hook lets you add React state to function components. Here is an example:

    ```jsx
    import React, { useState } from 'react';
    
    function Counter() {
        const [count, setCount] = useState(0);
    
        return (
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </div>
        );
    }
    ```

    In the example above, `useState` is called with the initial state argument and returns a pair—an array with two items. The first item is the current state value (similar to `this.state` in class components), and the second item is a function to update it (similar to `this.setState` in class components).

2. **useEffect:**

    The `useEffect` hook lets you perform side effects in function components. Here is an example:

    ```jsx
    import React, { useState, useEffect } from 'react';
    
    function Example() {
        const [count, setCount] = useState(0);
    
        // Similar to componentDidMount and componentDidUpdate:
        useEffect(() => {
            document.title = `You clicked ${count} times`;
        });
    
        return (
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </div>
        );
    }
    
    ```

    In the example above, `useEffect` is used to update the document title each time the `count` state is updated. The `useEffect` hook is a replacement for the `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` lifecycle methods in class components.

You can build your own hooks and explore other hooks that are included on react, but we will explore that in future lessons.

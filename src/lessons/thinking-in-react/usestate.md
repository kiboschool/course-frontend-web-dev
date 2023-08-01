# useState

## Understanding the `useState` Hook

The `useState` [hook](https://react.dev/reference/react) (we will go deeper in hooks a un future lessons) is a function that lets you add React state to your functional components. 

Here is a simple counter component that uses the `useState` hook:

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

export default Counter;
```

In this example, `useState` is called with the initial state as an argument (`0` in our case). `useState` returns a pair of values: the current state and a function that updates it. This is why we write `const [count, setCount] = useState(0)`.

The `setCount` function is used to update the state. When the user clicks the button, the click handler updates the state with the new count
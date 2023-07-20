# Useeffect

## Using the useEffect Hook

The `useEffect` hook in React allows you to perform side effects in functional components. Side effects could be data fetching, subscriptions, or manually changing the DOM. The hook takes two arguments: a function that contains the side-effect logic, and an array of dependencies.

In it's simple form, it looks like this

```jsx
useEffect( () ⇒ {} , [] )
```

As you can see, it's just a function, that takes 2 parameters. The first in is a function. The second one is an array, a dependency array.

## What is the Dependency Array?

The dependency array is an array of values that the effect depends on. If one of these values changes between renders, React will re-run the effect. In other words, the effect "subscribes" to the values listed in the array, and whenever one of these values changes, the effect re-runs.

Let's take a closer look at the different scenarios:

- **No Dependency Array:** If no second argument is passed to `useEffect`, the effect will run after every render.
    
    ```jsx
    useEffect(() => {
      console.log('This runs after every render.');
    });
    
    ```
    
- **Empty Dependency Array:** If the second argument is an empty array `[]`, the effect will only run once, similar to `componentDidMount` in class components.
    
    ```jsx
    useEffect(() => {
      console.log('This runs once after the initial render.');
    }, []);
    ```
    
- **Array with Dependencies:** If the array includes one or more values, the effect will run whenever any of these values change.
    
    ```jsx
    useEffect(() => {
      console.log('This runs whenever data or props change.');
    }, [data, props]);
    ```
    

## Why Do We Need the Dependency Array?

The dependency array in `useEffect` allows us to optimize when effects are run. By precisely specifying what our side effect depends on, we can avoid unnecessary calls to the effect function, making our components more performant and preventing potential bugs.

Remember, if your effect does not depend on any values from props or state, you should pass an empty array `[]`, and React will call your effect once and then never again. If your effect does depend on some values, ensure they are included in the dependency array to instruct React to re-run the effect when these values change. Not doing so can lead to stale data and unwanted behaviors in your application.

## How does it look like in my components?

Here's a simple example showing how you might use `useEffect`:

```jsx
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('<https://api.example.com/data>')
      .then(response => response.json())
      .then(data => setData(data));

			// this function executes only once, on after component mounts, note the empty dependency array [] down this line
  }, []);

  useEffect(() => {
    if (data) {
      console.log('Data updated!');
			// this function executes only when the data ( state defined above changes , note the dependency array with data variable as dependency [data])
    }
  }, [data]);

  return (
    <div>
      {/* display the fetched data here */}
    </div>
  );
}

export default ExampleComponent;

```

In this example, we're fetching data when the component mounts (`useEffect` with an empty dependency array), and logging a message whenever the fetched data is updated (`useEffect` with `data` in the dependency array).

## Cleaning up Effects

Just like `componentWillUnmount` in class components, `useEffect` can return a function that will be used to clean up the effect. This is especially useful for subscriptions:

```jsx
useEffect(() => {
  const subscription = props.source.subscribe();
  return () => {
    // Clean up the subscription
    subscription.unsubscribe();
  };
}, [props.source]);

```

In this example, a subscription is created when the component mounts, and then it's cleaned up when the component unmounts.
# State Management is Hard

Let's remember the concept of state in programming: **It's a snapshot of values at a particular point in time.** 

## What is State in react?

In the context of React, state is an object that stores values which can change over time and affect the behaviour of your app (i.e a like counter). These values can be anything: numbers, strings, arrays, objects, or even other React components.

State in a React component can change over time, usually in response to user actions such as click events, form submissions, or API calls. When state changes, React re-renders the component (and any child components) to reflect those changes.

For example, think of a simple counter component. It might start at zero, and every time a button is clicked, the counter increments. This changing number — the count — is stored in the state of the component.

![Untitled](./state-management-is-hard/untitled.png)

### State handling can be hard

But things can get complex. What if:

- We need a state value in a parent component?
- While adding state, `App.js` starts to get very polluted with a lot of different states?
- We need it into children component 3 or 4 levels down?
- We need to connect APIs responses with state?
- A state change triggers another state change?

This complex problems are solved with different tools we will explore in the following lessons.
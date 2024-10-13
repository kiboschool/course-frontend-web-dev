# React and Events

React, being a JavaScript library, makes use of JavaScript's event system. However, there are a few differences in how React handles events compared to how they're handled in plain JavaScript. In this article, we will delve into handling events in React.

## React Events are CamelCase

In plain HTML, events are written in all lowercase. However, in React, events are written in camelCase.

```jsx
// plain HTML
<button onclick="handleClick()">Click me</button>

// React
<button onClick={handleClick}>Click me</button>

```

In the above example, notice how `onclick` changes to `onClick` when we transition from HTML to React.

## Pass Functions as Event Handlers

In plain HTML, you usually pass a string as the event handler. In React, you pass in the function itself, not a string. This is an essential distinction because it allows us to pass in complex functions with JavaScript logic, not just simple one-liners.

```jsx
// React
function handleClick() {
  alert('You clicked the button!');
}

function MyButton() {
  return <button onClick={handleClick}>Click me</button>;
}
```

Here, we've created a function called `handleClick` that alerts the user when they click the button. We then pass this function into our button as a prop.

## The Event Object

Just like in HTML, in React, you have access to the event object that triggered the function. This event object includes details about the event that just happened.

```jsx
function handleClick(event) {
  alert('You clicked the button!');
  console.log(event);
}

function MyButton() {
  return <button onClick={handleClick}>Click me</button>;
}

```

In the example above, we log the event object to the console whenever the button is clicked.

## Other Events

React supports all the event handlers that you can use in standard HTML, such as `onClick`, `onSubmit`, `onChange`, and many others. Let's take a look at the `onChange` and `onSubmit` handlers specifically:

### onChange

The `onChange` event is used in input elements such as text fields, text areas, and select options. It captures the changes made in the input field and can be used to update the state in a React component.

```jsx
function MyForm() {
  function handleChange(event) {
    console.log("I Typed", event)
  }

  return (
    <input type="text" onChange={handleChange} />
  );
}

```

In the above example, the `handleChange` function executes the console log every time I type.

### onSubmit

The `onSubmit` event is used in forms when you want to handle the event where the form is submitted.

```jsx
function MyForm() {

  function handleSubmit(event) {
    event.preventDefault();
    alert('Form was submitted');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

```

In this example, when the form is submitted, it triggers the `handleSubmit` function, which prevents the page from refreshing (the default action when a form is submitted) and shows an alert.

In conclusion, handling events in React is straightforward and similar to handling events in JavaScript, with a few key differences.

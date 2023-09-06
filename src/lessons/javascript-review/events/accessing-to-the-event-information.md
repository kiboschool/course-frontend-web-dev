# Accessing the Event Information

---

In JavaScript, when an event is triggered, it creates an `Event` object that contains information related to that event. This object is automatically passed as the first argument to your event handler function, typically represented by `event` or `e`.

## The Event Object

The `Event` object comes with a variety of properties and methods that provide information about the event. Let's see some of them:

- `event.type`: The `type` property contains a string that identifies the type of the event, such as 'click', 'submit', 'keydown', etc.
- `event.target`: The `target` property refers to the element that triggered the event.
- `event.currentTarget`: The `currentTarget` property refers to the element that the event listener was attached to.

These properties can provide valuable information about the event and the context in which it was triggered. Consider the following example:

```jsx
document.querySelector('button').addEventListener('click', function(event) {
    console.log('Event type: ' + event.type); // Outputs: 'click'
    console.log('Event target: ' + event.target.tagName); // Outputs: 'BUTTON'
});

```

## Accessing Mouse Event Information

When handling mouse events, the `MouseEvent` object, which extends from the `Event` object, provides additional properties:

- `event.clientX` and `event.clientY`: The `clientX` and `clientY` properties provide the horizontal and vertical coordinates, respectively, of the mouse when the event was triggered, relative to the client area of the window.
- `event.pageX` and `event.pageY`: Similarly, `pageX` and `pageY` provide the coordinates of the mouse relative to the whole document.

Here's an example of accessing mouse event information:

```jsx
document.querySelector('button').addEventListener('mousemove', 
    function(event) {
    console.log(
            'Mouse position (X, Y): ' + event.clientX + ', ' + event.clientY
        );
});
```

## Accessing Keyboard Event Information

In keyboard events, the `KeyboardEvent` object, another extension of the `Event` object, provides properties like:

- `event.key`: The `key` property represents the value of the key pressed by the user.
- `event.keyCode`: The `keyCode` property represents the Unicode of the key pressed by the user (Note: this property is deprecated and should be avoided).
- `event.code`: The `code` property represents a string that identifies the physical key pressed by the user.

Here's an example:

```jsx
document.querySelector('input').addEventListener('keydown', function(event) {
    console.log('Key pressed: ' + event.key);
    console.log('Key code: ' + event.code);
});
```

## Event Methods

The `Event` object also includes methods to control the default behavior of the event:

- `event.preventDefault()`: The `preventDefault` method stops the browser from performing the default action of the event. For instance, it can prevent a form from being submitted.
- `event.stopPropagation()`: The `stopPropagation` method prevents the event from bubbling up the DOM tree, stopping any parent handlers from being notified of the event.

```jsx
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Stops form from submitting
    // Code to handle form data
});
```

# Types of events

As we covered before, JavaScript is known for its capability to create interactive and dynamic web applications. This dynamism largely depends on the events JavaScript can listen for and respond to. Events are actions or occurrences that happen in the browser. JavaScript provides a plethora of event types that cater to a myriad of user interactions. This article will discuss several common event types.

## Mouse Events

Mouse events are triggered by user interactions with a mouse or similar input device.

- `click`: Fired when the user clicks an element.
- `dblclick`: Fired when the user double-clicks an element.
- `mousemove`: Fired when the mouse pointer is moved within an element.
- `mousedown` and `mouseup`: Fired when a mouse button is pressed and then released.
- `mouseover` and `mouseout`: Fired when the mouse pointer enters and leaves an element.
- `mouseenter` and `mouseleave`: Similar to `mouseover` and `mouseout`, but do not bubble and are not triggered when the mouse pointer hovers over a child element.

## Keyboard Events

Keyboard events are triggered by user interactions with the keyboard.

- `keydown`: Fired when a key is pressed down.
- `keyup`: Fired when a key is released.
- `keypress`: Fired when a key that produces a character value is pressed down.

## Form Events

Form events are triggered by user interactions with form elements.

- `submit`: Fired when a form is submitted.
- `change`: Fired when the value of an element has been changed.
- `input`: Fired when the user inputs data into an `<input>`, `<textarea>`, or `<select>` element.
- `focus`: Fired when an element gets focus.
- `blur`: Fired when an element loses focus.

## Window Events

Window events are triggered by the browser window.

- `load`: Fired when the entire page has loaded.
- `resize`: Fired when the browser window is resized.
- `scroll`: Fired when the user scrolls the page.
- `unload`: Fired once a page has unloaded (or the browser window has been closed).

## Other Events

There are many more events available. For instance, touch events (`touchstart`, `touchmove`, `touchend`, etc.) are essential for mobile web development. Drag and drop events (`dragstart`, `drag`, `drop`, etc.) enable drag-and-drop functionality. Media events (`play`, `pause`, `ended`, etc.) are used to control audio and video.
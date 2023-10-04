# Selecting Elements

Interacting with HTML elements is a crucial part of working with JavaScript and the Document Object Model (DOM). There are several methods available to select HTML elements, allowing you to manipulate their content, style, attributes, and more.

## Selecting Elements by ID

Each HTML element can have a unique ID, and this ID can be used to select a specific element. The `document.getElementById()` method is used to select an element by its ID.

```jsx
let element = document.getElementById('myId');
```

In this example, the element with the ID 'myId' is selected and stored in the variable `element`.

## Selecting Elements by Class Name

HTML elements can also share a class name, which can be used to select multiple elements at once. The `document.getElementsByClassName()` method returns a live HTMLCollection of elements with the given class name.

```jsx
let elements = document.getElementsByClassName('myClass');
```

In this example, all elements with the class 'myClass' are selected. You can then loop through `elements` to work with each element.

## Selecting Elements by Tag Name

You can also select elements based on their tag name using the `document.getElementsByTagName()` method. This method also returns a live HTMLCollection of elements.

```jsx
let elements = document.getElementsByTagName('p');
```

In this example, all `<p>` elements are selected.

## Query Selectors

Query selectors offer a more flexible approach to selecting elements. The `document.querySelector()` method returns the first element that matches a specified CSS selector(s) in the document.

```jsx
let element = document.querySelector('.myClass');
```

In this example, the first element with the class 'myClass' is selected.

If you want to select all elements that match a certain CSS selector(s), you can use the `document.querySelectorAll()` method. This method returns a static [NodeList](https://www.w3schools.com/js/js_htmldom_nodelist.asp) (it's like an array but not officially an array) representing all elements that match the specified group of selectors.

```jsx
let elements = document.querySelectorAll('.myClass');

```

In this example, all elements with the class 'myClass' are selected.

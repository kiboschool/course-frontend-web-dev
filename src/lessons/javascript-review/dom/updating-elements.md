# Updating Elements

One of the key advantages of the Document Object Model (DOM) is the ability to modify HTML elements on a webpage using JavaScript. This allows us to make web pages interactive and dynamic. In this article, we'll explore several ways to update and modify DOM elements.

## Changing Element Content

To change the text content of an HTML element, you can use the `textContent` property. This will change the content of the selected element and all its descendants.

```jsx
let element = document.querySelector('p');
element.textContent = 'New paragraph text.';
```

In this example, the first `<p>` element on the page is selected, and its text content is changed.

## Updating Attributes

HTML elements often have attributes, like `class`, `id`, `href`, and `src`, that can be updated. Use the `setAttribute()` method to change the value of an attribute:

```jsx
let link = document.querySelector('a');
link.setAttribute('href', '<https://www.new-url.com>');
```

In this example, the first `<a>` element on the page is selected, and its `href` attribute is changed to `'<https://www.new-url.com>'`.

## Adding and Removing Classes

To add or remove classes from an element, you can use the `classList` property, which provides methods like `add()`, `remove()`, and `toggle()`.

```jsx
let element = document.querySelector('div');
element.classList.add('new-class'); // adds 'new-class' to the element

element.classList.remove('old-class'); // removes 'old-class' from the element

element.classList.toggle('another-class'); // toggles 'another-class'

```

## Changing CSS Styles

You can also change the CSS styles of an element using the `style` property:

```jsx
let element = document.querySelector('div');
element.style.color = 'blue';
element.style.backgroundColor = 'yellow';
```

In this example, the first `<div>` element on the page is selected, and its text color and background color are changed.

# CSS and React

Styling in React is a bit different from traditional HTML/CSS/JavaScript development. In this article, we'll explore how to apply CSS styles in React.

## Inline Styling

React allows us to write inline styles on components using a JavaScript object. React's inline styles are written in camelCase as opposed to hyphen-separated. Also, since the styles are a JavaScript object, we enclose the entire style attribute in braces `{}`.

```jsx
const myStyle = {
    color: 'white',
    backgroundColor: 'DodgerBlue',
    padding: '10px',
    fontFamily: 'Arial',
};

function MyComponent() {
  return <h1 style={myStyle}>Hello Style!</h1>;
}

```

In the example above, we define our style as a JavaScript object and then pass it into our component using JSX curly braces. It's important to note that the style's property names are in camelCase.

## External Stylesheets

While inline styles are okay for small styling changes, most applications will require a full CSS stylesheet for their styling needs. You can include CSS stylesheets in your React component similarly to how you would in an HTML file.

First, create a new CSS file. If you're creating a CSS file for a component called `MyComponent`, it is common to name the file `MyComponent.css`.

Then, in your CSS file, you can add any styles you want.

```css
/* MyComponent.css */
.myComponent {
  color: white;
  background-color: DodgerBlue;
  padding: 10px;
  font-family: Arial;
}
```

Next, import the CSS file into your React component file.

```jsx
import React from 'react';
import './MyComponent.css';

function MyComponent() {
  return <h1 className="myComponent">Hello Style!</h1>;
}

export default MyComponent;
```

We've included the stylesheet we wrote by using `import './MyComponent.css'` at the top of our component file. We then assign the class to our component using the `className` attribute.

## CSS Modules

CSS Modules are a popular system for modular and reusable CSS. A CSS Module is a CSS file where all class and animation names are scoped locally by default. This approach can be a more reliable method of styling React components because it ensures that styles don't leak to other parts of the application.

When using CSS Modules, filenames are usually written as `MyComponent.module.css`.

```jsx
import React from 'react';
import styles from './MyComponent.module.css';

function MyComponent() {
  return <h1 className={styles.myComponent}>Hello Style!</h1>;
}

export default MyComponent;

```

## Styled-components

Styled-components is a library for React and React Native that allows you to use component-level styles in your application that are written with a mixture of JavaScript and CSS. This approach enables full capabilities of CSS (like pseudo selectors) and the power of JavaScript to create dynamic styles.

```jsx
import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  color: white;
  background-color: DodgerBlue;
  padding: 10px;
  font-family: Arial;
`;

function MyComponent() {
  return <StyledH1>Hello Style!</StyledH1>;
}

export default MyComponent;
```

### Which one to use?

On the beginning, while learning. Start with `Inline CSS` and as you progress try different styles like external style sheet and `StyledComponents`

.
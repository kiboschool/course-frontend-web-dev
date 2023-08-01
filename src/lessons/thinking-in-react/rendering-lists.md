# Rendering Lists

Rendering lists of data is a very common requirement in web applications. React provides an efficient and intuitive way to display collections. Let's explore how to do this.

## What Are Lists in React?

In React, lists can be created by rendering an array of `JSX elements`. In JavaScript, arrays are lists of objects. With React, we can transform these arrays into lists of elements.

## Rendering Simple Numbers

The most common way to render a list in React is by using the JavaScript `map()` method. The `map()` method creates a new array with the results of calling a function on every element in the original array. In the context of React, we use `map()` to transform an array of data into an array of JSX elements.

Here's an example:

```jsx
function NumberList(props) {
	const numbers = [1, 2, 3, 4, 5];

  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
```

In this example, we have an array of numbers. We use `map()` to iterate over each number, and for every number, we return a new `<li>` element that contains the number. The result is a new array of `<li>` elements, which we then include inside an `<ul>` element.

## Keys

In React, a key is a special string attribute that you need to include when creating lists of elements. Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.

The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often, you would use IDs from your data as keys. Let's modify our previous example:

Here, we have assigned the `key` prop to each list item. Notice that we've used the `toString()` method to convert the number to a string. React requires that keys are strings.

## Rendering an array of objects

We can render this data as a list in React using the `map()` function as we've seen earlier. This time, we will access the properties of each person object

```jsx
function PeopleList(props) {
	const people = [
	  { id: 1, name: 'Alice', age: 20 },
	  { id: 2, name: 'Bob', age: 22 },
	  { id: 3, name: 'Charlie', age: 23 },
	  { id: 4, name: 'Dave', age: 24 }
	];

  const listItems = people.map((person) =>
    <li key={person.id}>
      {person.name} is {person.age} years old.
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
```

In this example, we're displaying each person's name and age in the list item. Each list item has a unique key — the person's id. The `PeopleList` component is then rendered to the root DOM node with the people array passed as a prop.
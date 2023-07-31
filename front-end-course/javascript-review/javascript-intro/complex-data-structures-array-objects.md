# Complex data structures array objects

If you are a Python developer looking to understand JavaScript, you likely know about Lists of Dictionaries. In JavaScript, an equivalent construct is the Array of Objects. Let's delve into this topic.

## Arrays in JavaScript

An Array is a global object in JavaScript which is used to store multiple values in a single variable. You can create an array in JavaScript by enclosing a comma-separated list of values in square brackets `[]`.

```jsx
let fruits = ['Apple', 'Banana', 'Cherry'];
```

Arrays in JavaScript can contain any data type, and the data types can be mixed. This includes objects.

## Objects in JavaScript

An object in JavaScript is similar to a dictionary in Python. It contains key-value pairs and is denoted by curly braces `{}`.

```jsx
let student = {
    name: 'Alice',
    age: 22,
    course: 'Computer Science'
};
```

In this example, `name`, `age`, and `course` are the keys, and 'Alice', 22, and 'Computer Science' are their respective values.

## Arrays of Objects

An array of objects is simply an array where its elements are objects. Here's an example:

```jsx
let students = [
    {
        name: 'Alice',
        age: 22,
        course: 'Computer Science'
    },
    {
        name: 'Bob',
        age: 24,
        course: 'Physics'
    }
];
```

In this case, `students` is an array that contains two objects.

## Accessing Data in Arrays of Objects

You can access data in arrays of objects by specifying the index of the object in the array, followed by the key of the value you want to access. For example, to access Bob's age:

```jsx
let bobAge = students[1].age; // 24
```

This is analogous to accessing elements in a list of dictionaries in Python.

## Modifying Data in Arrays of Objects

You can modify the data in an object within an array by assigning a new value to the specific key:

```jsx
students[1].age = 25; // Bob is now 25
```

## Adding and Removing Elements

Adding a new object to the array can be done using the `push()` method:

```jsx
students.push({
    name: 'Charlie',
    age: 23,
    course: 'Mathematics'
});
```

Removing an object from the array can be achieved using the `splice()` method. For instance, to remove Bob from the array:

```jsx
students.splice(1, 1);

```

## Iterating Over an Array of Objects

You can use a `for` loop or the `forEach()` method to iterate over an array of objects:

```jsx
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}

// or

students.forEach(student => {
    console.log(student.name);
});

```
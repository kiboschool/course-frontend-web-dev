# Advanced array methods 2

---

This time, we will be looking at `some()`, `every()`, `find()`, `findIndex()`, and `includes()`.

Before we start, let's discuss an important concept in JavaScript that's used in all of these methods - the callback function.

## Callback Functions

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. In other words, when we use methods like `map()`, `filter()`, `find()`, etc., the function that we are passing in is a callback function. It's "called back" by the method at some point.

Now, let's move onto the array methods.

## 1. some()

The `some()` method checks if at least one element in the array passes the test implemented by the provided function. It's somewhat similar to the `any()` function in Python.

```jsx
let numbers = [1, 2, 3, 4, 5];
let hasNegativeNumbers = numbers.some(num => num < 0);
console.log(hasNegativeNumbers); // prints: false

```

In this case, `num => num < 0` is our callback function. It uses [implicit return](https://domhabersack.com/implicit-return). One of JS features.

## 2. every()

The `every()` function checks if all elements in the array pass the test implemented by the provided function. It's similar to the `all()` function in Python.

```jsx
let numbers = [1, 2, 3, 4, 5];
let allPositive = numbers.every(num => num > 0);
console.log(allPositive); // prints: true

```

In this case, `num => num > 0` is our callback function.

## 3. find()

The `find()` method returns the value of the first element in the array that satisfies the provided testing function.

```jsx
let numbers = [1, 2, 3, 4, 5];
let found = numbers.find(num => num > 3);
console.log(found); // prints: 4

```

In this case, `num > 3` is our callback function.

## 4. findIndex()

The `findIndex()` method returns the index of the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, it returns -1.

```jsx
let numbers = [1, 2, 3, 4, 5];
let foundIndex = numbers.findIndex(num => num > 3);
console.log(foundIndex); // prints: 3

```

In this case, `num > 3` is our callback function.

## 5. includes()

The `includes()` method determines whether an array includes a certain value among its entries, returning `true` or `false`.

```jsx
let numbers = [1, 2, 3, 4, 5];
let includesTwo = numbers.includes(2);
console.log(includesTwo); // prints: true

```

This one doesn't require a callback function; instead, you pass in the value you're searching for.

In conclusion, JavaScript provides powerful built-in array methods that help you manipulate and work with arrays in an efficient manner. A key aspect to understand is the use of callback functions within these methods.

---
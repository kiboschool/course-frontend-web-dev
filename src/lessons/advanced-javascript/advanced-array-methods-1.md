# Advanced Array Methods 1

---

As you may already know from your Python experience, arrays (or lists in Python) are a fundamental aspect of any programming language, and JavaScript is no exception. JavaScript has built-in array methods that can be used to manipulate and work with data effectively.

In this first section, we'll delve into the essential methods: `forEach()`, `map()`, `filter()`, `reduce()`, and `sort()`.

## 1. forEach()

In Python, you might use a for loop to iterate over a list. JavaScript provides a similar function known as `forEach()`. The `forEach()` method calls a function once for each element in an array, in order.

```jsx
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));
```

This will log each number in the console.

## 2. map()

Like Python's list comprehension, JavaScript's `map()` function allows you to apply a function to every item in an array and return a new array with the results.

```jsx
let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map(num => num * num);
console.log(squared); // prints: [1, 4, 9, 16, 25]
```

Here we've created a new array of the squares of each number.

## 3. filter()

The `filter()` function creates a new array with all elements that pass a specified condition.

```jsx
let numbers = [1, 2, 3, 4, 5];
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // prints: [2, 4]
```

In this case, we have filtered the original array to create a new array that only includes the even numbers.

## 4. reduce()

The `reduce()` method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. It's somewhat similar to the `sum()` function in Python, but it's more powerful as it can be used with any binary function.

```jsx
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // prints: 15
```

We've just computed the sum of the array. The second argument `0` is the initial value of the `total`.

## 5. sort()

The `sort()` method sorts the elements of an array in place and returns the array. The default sort order is [lexicographical](https://stackoverflow.com/questions/45950646/what-is-lexicographical-order) (not numeric), but a compare function can be provided.

```
let numbers = [1, 10, 2, 21, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // prints: [1, 2, 3, 10, 21]

```

In this case, we have sorted the numbers in ascending order. The compare function `(a, b) => a - b` is needed to sort the numbers correctly. Without it, JavaScript would convert numbers to strings and then sort lexicographically, which could give unexpected results.

In summary, JavaScript provides several built-in array methods that can be used for manipulating and working with arrays. If you're coming from Python, many of these methods should feel familiar, but with a JavaScript twist. Next, we'll explore some of the more advanced array methods, so stay tuned!

---
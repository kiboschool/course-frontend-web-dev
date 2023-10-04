# Loops

In Python, you're likely familiar with loops, structures that allow you to repeat blocks of code. JavaScript also employs loops with a similar purpose but different syntax and behavior. In this article, we'll explore the various types of loops in JavaScript, comparing them to their Python equivalents.

## For Loop

The `for` loop is a common type of loop in JavaScript, with similar semantics to Python but different syntax.

**Python:**

```python
for i in range(5):
    print(i)
```

**JavaScript:**

```jsx
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

In JavaScript, the `for` loop has three components within the parentheses: the initialization (usually of the loop counter), the condition (which, while true, allows the loop to continue), and the final expression (usually incrementing the counter).

## While Loop

The `while` loop in JavaScript is quite similar to Python.

**Python:**

```jsx
i = 0
while i < 5:
    print(i)
    i += 1

```

**JavaScript:**

```jsx
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

The `while` loop continues to run as long as the condition in parentheses is true. Note that JavaScript uses `++` for incrementing a variable, though `+=` is also valid.

## Do...While Loop

The `do...while` loop is unique to JavaScript and doesn't have a direct equivalent in Python. This loop will execute the block of code **once** and then continue to repeat the loop as long as the condition is true.

**JavaScript:**

```jsx
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

```

In this example, even if `i` starts greater than 5, the block of code inside the `do` loop will still run once.

## For...In Loop and For...Of Loop

In JavaScript, there are two additional loop structures, `for...in` and `for...of`, which are somewhat similar to Python's `for` loop when used with collections.

The `for...in` loop is used to iterate over the enumerable properties of an object:

```jsx
let obj = {a: 1, b: 2, c: 3};
for (let prop in obj) {
    console.log(prop + ": " + obj[prop]);
}

```

This loop will print the name and value of each property in the object.

The `for...of` loop is used to iterate over iterable objects, like arrays or strings:

```jsx
let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log(value);
}
```

This loop will print each value in the array. Note that `for...of` **cannot** be used with regular objects because they are not iterable.

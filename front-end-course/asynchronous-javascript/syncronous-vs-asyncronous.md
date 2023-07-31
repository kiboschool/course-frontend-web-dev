# Syncronous vs asyncronous

Understanding the differences between synchronous and asynchronous programming is crucial when working in a language like JavaScript, which allows both models. This article will delve into the differences between these two paradigms and discuss why you might choose one over the other.

## Synchronous Programming

In synchronous programming, operations are performed sequentially. That means each operation is executed one after the other. When a function is called, the program "waits" for the function to complete its task before moving on to the next operation.

```jsx
console.log('First');
console.log('Second');
console.log('Third');
```

In the example above, 'First' is logged, then 'Second', and finally 'Third'. Each operation is performed in order, one after the other.

This model is straightforward and easy to follow, but it can lead to inefficiency. For example, if you need to fetch data from a server, the entire program halts and waits until the data has been fetched, even if other parts of your program could be executing. (This is how Python works. It's inefficient)

## Asynchronous Programming

Asynchronous programming allows multiple operations to execute concurrently. If an operation is going to take a while (like a request to a server), the program doesn't wait around for it to complete. Instead, it can move on to the next operation. Once the long-running operation is finished, the program is notified and can use the result as needed.

```jsx
console.log('First');
setTimeout(() => console.log('Second'), 0);
console.log('Third');

// logs second, First, Third
```

In the example above, even though 'Second' appears before 'Third' in the code, 'Third' is logged before 'Second'. **This is because setTimeout is an asynchronous function.** It sets up a timer, but doesn't wait for the timer to finish before moving on to the next line of code.

This model is efficient, as it allows the program to continue executing other code instead of waiting. However, it can be more complex to understand and handle, especially when dealing with dependencies between operations.

## When to use each model?

- Use **synchronous** code for operations that are quick and must happen in a specific order.
- Use **asynchronous** code for operations that take a long time to run and don't need to block other operations, like network requests, file system tasks, or any IO-bound operations.
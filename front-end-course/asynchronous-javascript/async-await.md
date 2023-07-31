# Async await

JavaScript has introduced `async`/`await` syntax that allows us to write asynchronous code that looks and behaves more like synchronous code. 

## What is Async/Await?

Async/Await is a syntactic sugar on top of Promises, which makes asynchronous code look and behave a little more like synchronous code. This syntactic sugar leads to asynchronous, non-blocking code that appears a lot like synchronous, blocking code. This makes the code cleaner and easier to understand.

Async/Await is built on top of Promises. An async function always returns a Promise, and the resolve value of this Promise will be whatever you return from the function. The keyword `await` makes JavaScript wait until that Promise settles and returns its result.

## How to use Async/Await?

Remember the previous example in promises, this is how it's written in async/await

```jsx
async function processData() {
  try {
    const data = await getData('data.txt');
    const parsedData = parseData(data);
    await saveData('parsedData.txt', parsedData);
    console.log('Data saved successfully!');
  } catch (err) {
    console.log('Error:', err);
  }
}

processData();
```

In the example above, the `async` keyword in front of the function means that the function will always return a Promise. Inside an `async` function, you can use the `await` keyword before a Promise to wait for its resolution.

## Why use Async/Await?

There are several reasons why you might want to use async/await:

1. **Readability**: Async/Await makes asynchronous code look like it's synchronous. This makes the code easier to read and understand.
2. **Error handling**: With async/await, you can use `try`/`catch` blocks to handle errors, which is a more familiar syntax for error handling compared to Promises.
3. **Less noise**: Async/await requires less boilerplate compared to raw promises, which can make your code more concise and easier to maintain.
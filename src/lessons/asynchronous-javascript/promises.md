# Promises

## Problem with callbacks

While callbacks are very powerful, they can lead to what is known as "callback hell" if not managed properly. This is particularly true when you have a series of asynchronous operations that depend on each other. In these cases, each operation's callback contains another operation which has another callback, leading to heavily nested code. Check the following code:

```jsx
getData('data.txt', function(err, data){
   if (err) {
      console.log('Error:', err);
   } else {
      parseData(data, function(err, parsedData){
         if (err) {
            console.log('Error:', err);
         } else {
            saveData('parsedData.txt', parsedData, function(err){
               if (err) {
                  console.log('Error:', err);
               } else {
                  console.log('Data saved successfully!');
               }
            });
         }
      });
   }
});
```

Hard to say what is happening in what order. There might be a better way.

### Enter Promises

Promises were introduced to JavaScript as a solution to the "callback hell" problem. A Promise represents the eventual result of an asynchronous operation. It is an object that might return a value at some point in the future, or it might throw an error if the operation fails.

The previous example rewritten with promises:

```jsx
getData('data.txt')
  .then(data => parseData(data))
  .then(parsedData => saveData('parsedData.txt', parsedData))
  .then(() => console.log('Data saved successfully!'))
  .catch(err => console.log('Error:', err));
```

A Promise can be in one of three states:

- Pending: The Promise's outcome hasn't yet been determined because the asynchronous operation that will produce its result hasn't completed yet.
- Fulfilled: The asynchronous operation has completed, and the Promise has a resulting value.
- Rejected: The asynchronous operation failed, and the Promise will not be receiving a resulting value. Instead, it has a reason for its failure.

![Untitled](./promises/untitled.png)

Promises enhance asynchronous programming by providing a simpler and more powerful way to handle asynchronous operations compared to callbacks. Here's why:

- **Chaining**: Unlike callbacks, Promises are chainable. This means that you can link multiple asynchronous operations together, with each operation starting when the previous operation has completed. This makes the code more readable and manageable.
- **Error Handling**: With callbacks, error handling needs to be done individually for each operation. Promises, on the other hand, allow you to handle errors in a more centralized manner with the `catch` method.
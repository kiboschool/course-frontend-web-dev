# Writing Unit Tests

While creating our applications, testing is a critical aspect that ensures the correctness and reliability of your code. Testing, particularly unit testing, is all about writing additional code to verify if your functions are working as expected. One of the most popular testing libraries in the JavaScript ecosystem is [Jest](https://jestjs.io/). This article will guide you through the process of writing a basic unit test with Jest.

## Why Do We Need to Test Functions?

Unit tests allow developers to test individual units of code (usually functions) in isolation. If a unit test passes, you can be confident that the function is correctly doing what it was designed to do. This makes the codebase more robust and less prone to bugs.

Tests also serve as documentation. By reading the tests, other developers can understand what a function is supposed to do and what its output should be for a given input. Additionally, tests make refactoring safer and easier because you'll quickly find out if your changes have broken anything.

## Setting Up Jest

Before you can write tests with Jest, you'll need to install it. Create a new project with NPM and then in install Jest  (from the root folder) You can do this using npm (Node Package Manager) in your terminal:

```bash
npm install --save-dev jest
```

This command installs Jest as a devDependency, meaning it will not be included when your code is compiled for production.

## Writing Your First Test with Jest

Now that you have Jest installed, let's write a "Hello, World!" test.

First, create a new JavaScript file for your function. Let's call it `greeting.js`:

```jsx
function greeting() {
    return "Hello, World!";
}

module.exports = greeting;
```

Next, create another JavaScript file for your test. By convention, it should be named after the file it's testing with `.test.` added before the file extension. So, let's call it `greeting.test.js`:

```jsx
const greeting = require('./greeting');

test('the function greeting should return "Hello, World!"', () => {
    expect(greeting()).toBe("Hello, World!");
});
```

The `test` function takes two arguments: a string description of the test and a callback function to run the test. Inside the callback function, we use `expect` to assert what the result should be. The `toBe` method checks that the output of `greeting()` is exactly `"Hello, World!"`.

## Running the Test

To run your test, you'll use the `jest` command in your terminal:

```bash
npx jest
```

If everything is set up correctly, Jest will find and run your test, then report back whether it passed or failed.

---

In addition to the `test` function, Jest provides `describe` and `it` functions to help structure your tests in a more readable and organized manner. They allow you to group tests and create more descriptive test names, making your tests function both as checks for code correctness and as effective documentation.

### Why Use `describe` and `it`?

The `describe` function allows you to group related tests together, often those tests which target the same function or a specific feature of your application. This helps to keep your test suite organized, making it easier for other developers (and you, in the future) to understand the purpose and coverage of your tests.

The `it` function is equivalent to `test`. It's simply an alias that, when combined with `describe`, can lead to more readable test output.

By using `describe` and `it`, you can write your tests in a way that they read almost like sentences, describing the behavior of your functions in clear terms.

## Example: Testing `greeting` Function with `describe` and `it`

Let's rework our previous `greeting` function tests using `describe` and `it`. Suppose we want to test not just the basic functionality, but also how `greeting` behaves when given an argument.

First, update your `greeting.js`:

```jsx
function greeting(name) {
    if (name) {
        return `Hello, ${name}!`;
    }
    return "Hello, World!";
}

module.exports = greeting;

```

The function now takes an optional `name` parameter. If `name` is provided, it will greet the named individual; otherwise, it will default to `"Hello, World!"`.

Next, rewrite the tests in `greeting.test.js`:

```jsx
const greeting = require('./greeting');

describe('greeting', () => {
    it('returns "Hello, World!" when called without arguments', () => {
        expect(greeting()).toBe("Hello, World!");
    });

    it('greets the provided name when called with a string argument', () => {
        expect(greeting("Jest")).toBe("Hello, Jest!");
    });
});

```

In the test file, we now have a `describe` block for `greeting` that groups two tests together. The `it` function is used instead of `test`, and the combination of `describe` and `it` leads to more readable test names.

You also might be curious about what `describe` and `it` individually do. They basically provide formatting to  the test. Try to write a test with only `describe` (without `it`) or vice versa and you will see how different the format in the console is!
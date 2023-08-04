# Project: Encrypt and Decrypt

## 0. Project set-up
Get your starter code and project set up [here](https://classroom.github.com/a/d6Fdc2aJ)

## 1. Introduction

Encryption means: *hide the content of a message from plain sight, so that only authorized parties can decipher an encrypted text*. The [Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher) is one of the earliest known encryption methods. The Roman emperor Julius Caesar used it to send secret orders to his generals on the battlefield.

The Caesar Cipher is one of the simplest techniques for encrypting a message, each letter of the original text is replaced by another letter found a fixed number of positions (offset) ahead in the same alphabet.

![https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

For example, if we use an offset of **3** positions:

- The letter A is encrypted as D.
- The word CASA is encrypted as FDVD.
- Unencrypted alphabet: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Encrypted alphabet: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Today, all simple substitution ciphers are easily decrypted and, although they do not offer much security, but for our learning, it's perfect!

## 2. Project Summary

In this project, you will create a web application that will allow a user to encrypt and decrypt a text in the browser by indicating a specific character shift (offset).

You will use HTML, CSS, and JavaScript.

You should have an text input that allows the user to input a message and set a numerical offset, then print the encrypted message somewhere in the screen.

The design of the app (colors, box location placement, etc) are done at your own discretion.

You will need to write uni tests for your modules to test that you encryption algorithm is working in all cases.

### The general objectives of this project are:

- Learn how to write unit tests for your JavaScript functions.
- Learn more about objects, structures, methods, and iteration (loops) in JavaScript
- Deploy your solution to GH pages.

## 3. General Considerations

- This project is solved **individually**.
- We suggest that you don't try to learn everything before you start coding. Don't worry too much about what you don't understand *yet.* You will learn.

## 4. Project milestones

These are the requirements that your project must meet to ensure that your work covers the main objectives.

### Milestone 1

**An interface that must allow the user to:**

**Encrypt a message**

- Insert the message (text) they want to encrypt. The message uses a simplified alphabet (only uppercase and only english characters).
- Choose an offset indicating how many positions you want the encryption to shift each character in the alphabet. The number will be positive and integer (positive integer).
- View the result of the encrypted message.

### Milestone 2

**Decrypt a message**

- Insert the message (text) that you want to decrypt. The message uses a simplified alphabet (only uppercase).
- Choose a character shift number (offset, corresponding to the one used for encryption) indicating how many positions you want the encryption to shift each character in the alphabet. The number will be positive and integer (positive integer).
- View the result of the decrypted message

### Milestone 3

**Unit tests for the methods**

The `cipher` methods (`encode` and `decode`) must have coverage with at least 3 working unit tests each.

### Milestone 4

**Deploy your code to GH pages**

The interface or web page must be "deployed" using GitHub Pages. (add link into repo's README)

### Milestone 5

**Add Support for Lowercase and Other Characters**

Such as the string “h3lL0”

## 6. Technical considerations

The project's logic must be fully implemented in JavaScript. In this project, it is NOT allowed to use libraries or frameworks, only pure JavaScript, also known as Vanilla JavaScript.

Unit tests must cover a minimum of 70% of statements, functions, and lines. The boilerplate already contains the necessary setup and configuration to run the tests as well as code coverage to see the level of test coverage using the `npm test` command.

The boilerplate we provide contains this structure:

```
./caesar-cypher
├── .gitignore
├── package.json
├── package-lock.json
├── js
│   └── cipher.js
├── css
│   └── style.css
├── tests
│   └── cipher.test.js
├── main.js
└── index.html
```

### Script / File Description

- `index.html`: This is the entry point to your application. It should include the HTML inputs for the text to be encoded, offset and result.
- `css/style.css`: This file should contain the style rules. We want you to write your own rules, which is why the use of CSS frameworks (Bootstrap, Materialize, etc.) is NOT allowed.
- `js/cipher.js`: Here you must implement the `cipher` object, this object (`cipher`) must contain two methods:
    - `cipher.encode(offset, string)`: `offset` is the number of positions we want to move to the right in the alphabet, and `string` is the message (text) we want to encrypt.
    - `cipher.decode(offset, string)`: `offset` is the number of positions we want to move to the left in the alphabet, and `string` is the message (text) we want to decrypt.
- `main.js`: Here you must listen to DOM events, invoke `cipher.encode()` or `cipher.decode()` as necessary, and update the result in the UI.
- `test/cipher.spec.js`: This file contains some example tests, and here you will have to implement the tests for `cipher.encode()` and `cipher.decode()`.

---

## 7. Hints, Tips, and Additional Readings

1. 📦 Install project dependencies with the `npm install` command. This assumes you have installed [Node.js](https://nodejs.org/) (which includes [npm](https://docs.npmjs.com/)).
2. If everything has gone well, you should be able to run the unit tests with the `npm test` command.
3. To view your program's interface in the browser, use the `npm dev` command to start the web server and go to `http://localhost:5173` in your browser.
4. Let's get coding! 
5. This project was built using [Vite](https://vitejs.dev/), check it out if you find any weird commands (like `build` in package.json)


# Information Type and Operations

## Learning objectives

- Understand what is meant by *values* in JavaScript.
- Learn about the different data types in JavaScript.
- Learn how to combine and transform values with operators in JavaScript.

---

## Data type

Computers handle billions of bits. To make it easier to manage large amounts of bits, we can divide them into "pieces" that represent pieces of information. In a JavaScript environment, these pieces are called ***values***. Each *value* has a *data type* that determines its role. In JavaScript, there are five (5) primitive data types:

1. `number`
2. `string` (text).
3. `boolean`
4. `undefined`
5. `null`

> These values are called primitives because they allow the [creation of other values](https://en.wikipedia.org/wiki/Primitive_data_type). i.e if you add 2 numbers, you get a new number. But what happens if you add two strings? `🤔`
>

Worth mentioning that every programming language has its primitives. [Python has 4](https://www.datacamp.com/tutorial/data-structures-python). [Java has 8](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html). They allow us to organize information and determine how the program should run. In this lesson, you will learn how to define and manipulate these types of data.

We are going to make operations with these primitive values to create new information. Adding a number. Organizing a text, etc

## 1. Numbers

Values of type `number` are, unsurprisingly, numerical values. That is, pieces of data that represent numerical information are represented with the `number` type. This includes positive and negative numbers, integers, and decimals. In addition, the `number` data type has three symbolic values: `+Infinity`, `-Infinity`, and `NaN` (not-a-number).

Let's see several examples. Open your console (remember writing `node` in your terminal) and write the following numbers. As you do so, the console returns the number to you.

```jsx
13// returns: 
13-9.81// retorna: -9.81
```

### Arithmetic Operators

The main operation done with numbers is arithmetic operations. Let's continue exploring the behavior of the `number` data type in your console. Write the following example in your console and confirm that you get the same result:

```jsx
100 + 4 * 11// returns: 144
```

The `+` and `*` symbols are also called *operators*. The first represents addition and the second represents multiplication. When you put an operator between two values, the operation is applied to those values and produces a new value. As you can see, multiplication happens first. But like in math, you can change this by enclosing the addition in parentheses.

```jsx
(100 + 4) * 11// returns: 1144
```

For subtraction, there is the `-` operator, and division can be done with the `/` operator. Let's see more examples (remember to try them in your console too!):

```jsx
12345 / 250// returns: 49.38
57 * 3 - 31 / 4 // returns: 163.25
100 / -0 // returns: -Infinity
1000 * Infinity// returns: Infinity
0/0 // returns: NaN
Infinity - Infinity// returns: NaN
```

There is also one more arithmetic operator that you might not immediately recognize. The `%` symbol is used to represent the *remainder* operation. X % Y results in the remainder of dividing X by Y. For example, 314 % 100 produces 14 (because 100 times 3 plus 14 equals 314), and 144 % 12 gives 0 (because 12 times 12 plus 0 equals 144). You will often see this operator referred to as *modulo*, although technically remainder is more accurate.

```jsx
5 % 3// returns: 27 % 2// returns: 1
```

## 2. Strings

The next basic data type is `String`, which refers to a *string of characters* and is used to represent text. They are declared by placing the content between quotes.

Open your console and type the following:

```jsx
'Hola, my name is Luke'// returns: "Hola, my name is Luke"
'I am a web developer'// returns: "I am a web developer"
"123"// returns: "123"
```

Both single and double quotes can be used to declare `strings`, as long as they match at the beginning and end.

---

**Pro tip:**

We can use both single (`'`) and double (`"`) quotes to delimit our strings, but conventionally, in each project we choose to use either one or the other and try to be consistent. This helps with the *clarity* and *maintainability* of the code in the long run. In our case, **we will choose single quotes from here on.**

---

Text strings cannot be divided numerically, multiplied, or subtracted, but the `+` character can be used on them. It does not add, but concatenates; it joins two `strings`. The following line produces the `string` "concatenate":

```jsx
'cats' + 'up' + ' ' + 'yomi'// returns: "catsup yomi"
// note the empty space that it is also a string in the 3rd position
```

Be careful mixing operations between *numbers* and *strings*. For example, multiplying a *number* by a *string* results in `NaN`.

```jsx
'hola' * 3// returns: NaN
```

## 3. Booleans

Often, you will need a value that simply distinguishes between two possibilities, such as "yes" and "no" or "on" and "off". For this, JavaScript has a *boolean* data type, which has only two values: *true* and *false*.

### Comparison Operators

Perform the following comparison in your console:

```jsx
3 > 2// returns: true
2 > 3// returns: false
typeof (3 > 2)// returns: "boolean"
typeof (2 > 3)// returns: "boolean"
5 == 5 // returns: true
```

> typeof is an special command of Javascriot that will tell you what data type you have i.e typeof "hello”, will return string
> 

#### Difference between == and ===
`==` and `===` are comparison operators, and they have a fundamental difference in the way they compare two values.

1. **Double Equals (==)**: This is a loose equality comparison operator in JavaScript. It compares two values for equality, after performing any necessary type conversions. This means that if you are comparing a number and a string, JavaScript will attempt to convert the string to a number before making the comparison.

For example:
```javascript
    console.log(5 == "5"); // true, because "5" is coerced to the number 5
    console.log(true == 1); // true, because true is coerced to the number 1
```

2. **Triple Equals (===)**: This is a strict equality comparison operator in JavaScript. It compares two values for equality, without performing any type conversion. If the types of the two values are different, it will always return `false`.

For example:
```javascript
    console.log(5 === "5"); // false, because no type coercion is done
    console.log(true === 1); // false, because true (boolean) is not the same type as 1 (number)
```

In general, it's a good practice to use `===` in JavaScript, because it avoids strange bugs that can occur due to unexpected type conversion.

`Strings` can be compared in the same way.

```jsx
"Aardvark" < "Zoroaster"// returns: true

```

The way `strings` are ordered is more or less alphabetically: uppercase letters are always "less than" lowercase letters, so `'Z' < 'a'` is true, and non-alphabetic characters (`!`, `-`, and so on) are also included in the ordering. The actual comparison is based on the [Unicode](https://unicode-table.com/en/#control-character) standard.

```jsx
'Zeyla' < 'ana'// returns: true
'Zeyla' < '!na'// returns: false
```

Other similar operators are `>=` (greater than or equal to), `<=` (less than or equal to), `==` (equal to), and `!=` (not equal to).

```jsx
'Itchy' == 'Itchy'// returns: true
'Itchy' != 'Scratchy'// returns: true
5 == 5// returns: true
10 != 'diez'// returns: true
```

The intention of NaN is to represent the result of a nonsensical calculation and as such, is not equal to the result of any other nonsensical calculation.

### Logical Operators

There are also some operations that can be applied to `Booleans`. JavaScript supports three logical operators: *and*, *or*, and *not*. These can be used to "reason" with `Booleans`.

The `&&` operator represents the *and* logical operation. It is a binary operator, and its result is *true* only if both given values are true. The `||` operator denotes the *or* logical operation. It returns true if either of the two given values are true. *Not* (Negation) is written as an exclamation point `!`. It is a binary operator that flips the value it is given; !true produces false and `!false` produces true. Let's see some examples:

```jsx
true && true// returns: true
true && false// returns: false
false && false// returns: false
true || true// returns: true
true || false// returns: true
!true// returns: false
!false// returns: true
```

The last logical operator you will learn is not unary or binary, but ternary and operates on three values. This is written with a question mark and a colon, like this:

```jsx
true ? 1 : 2// returns: 1
false ? 1 : 2// returns: 2

```

This is called the conditional operator (or sometimes the ternary operator since it is the only operator of its kind in the language). The value to the left of the question mark "chooses" which of the other two values will result. When it is true, the middle value is chosen, and when it is false, the value to the right is the result.

## 4. Null and Undefined

There are two special values, `null` and `undefined`, which are used to denote the absence of a significant value. They are values themselves, but they do not have any information. Many operations in the language that do not produce a meaningful value (you will see this later) produce `undefined` simply because they have to produce some value.

The difference in meaning between `undefined` and `null` is a JavaScript design accident and does not matter most of the time.

Understanding the difference between `undefined` and `null` (yes, there is a semantic difference) is important, and easier than it seems. Both values denote the absence of a value, but in one case, we could say that it is *intentional* (`null`), and in the other, it is not (`undefined`).

The value `undefined` means that a value has not been assigned, as opposed to `null`, which means that we have assigned a null value. This can be very useful for differentiating states in asynchronous operations, ... it is common for `undefined` to mean that the operation has not yet been completed, while `null` means that it has completed but returned a null value.

### BOOLEANS
- Booleans are simple True or False values.
- Yes or No
- 1 or 0

```js
let isLoggedIn = true;
let gameOver = false;
```
### VARIABLES CAN CHANGE TYPE
You probably wouldn't change a number to a boolean, but you can!

```js
let jumpper = 12; // Number
jumper = false; // Boolean
jumper = 123; // Back to Number
```

### STRINGS
- Strings are pieces of text, or strings of characters.
- We wrap them in quotes.
- Whether you use single or double quotes, just make sure you are consistent.

```js
let firstName = "Akshaya";
let lastName = 'Biswal';
```

### STRINGS ARE INDEXED
Each character has a corresponding index (a number).
```js
A K S H A Y A
0 1 2 3 4 5 6
```

```js
let firstName = 'Dev';

// Strings have length property
firstName.length;

// Access individual character using index
firstName[0];

// You can't change individual character
firstName[0] = 'A';

// Access the string length will show "undefined"
firstName[100];
```

### STRING METHODS
- Strings come with a set of built-in methods, which are actions that can be performed on or with that particular string.
- We can do things like...
   - Searching within a string
   - Replacing parts of a string
   - Changing case (upper/lowercase)

> thing.method()

#### Changing Case:
```js
let msg = "I am Available";
let upperMsg = msg.toUpperCase(); // I AM AVAILABLE

let text = "I am Not Available";
let upperText = msg.toLowerCase(); // i am not available
```
#### trim
```js
let greeting = '   Leave me alone please   ';
greeting.trim(); // Leave me alone please
```
> thing.method(arg)

Some methods accept arguments that modify their behavior. We pass these arguments inside of the parentheses.

#### indexOf
```js
let tvShow = 'catdog';
tvShow.indexOf('cat'); // 0
tvShow.indexOf('dog'); // 3
tvShow.indexOf('z'); // -1 not found
```

#### slice
```js
let str = 'thisisalongstring';
str.slice(0, 4); // this
str.slice(4); // isalongstring
```

#### replace
```js
let str = 'oh ! this is the thing. oh';
str.replace('oh', 'yes'); // yes ! this is the thing. oh
```

### STRING ESCAPES
```js
\n - newline
\' - single quote 
\" - double quote 
\\ - backslash
```

### STRING TEMPLATE LITERALS
Template literals are strings that allow embedded expressions, which will be evaluated and then turned into a resulting string.

```js
`I countd ${4 + 4} ships`;
```

```js
let user = 'Mraxya@1995';
`Welcome bacl ${user}`;
`Game over ${user.toUpperCase()}`;
```

```js
let item = 'Book';
let price = 100;
let quantity = 40;
`You brought ${quantity} ${item} and the total price $${price * quantity} `;
```

### NULL & UNDEFINED
- Null
    - "Intentional absence of any value" Must be assigned
- Undefined
    - Variables that do not have an assigned value are undefined
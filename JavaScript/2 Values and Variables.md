### PRIMITIVE TYPES
  1. Number
  2. String
  3. Boolean
  4. Null
  5. Undefined
  * Technically there are two others: Symbol and BigInt
---

### NUMBERS
  * JavaScript has ONE Number type
  * Positive numbers!
  * Negative numbers!
  * Whole number (integers)!
  * Decimal numbers!
---

### SIMPLE OPERATIONS
```js
// Addition
50 + 5;

// Subtraction
50 - 10;

// Multipliaction
11 * 11;

// Division
200 / 100;

// Modulo
27 % 2;
```
---

### NaN (NOT A NUMBER)
NaN is a numeric value that represents something that is not...a number.

```js
0/0;
1 + NaN;
```
---

### VARIABLES
* Variables are like "container" for a value in JavaScript.
* We can store a value and give it a name, so that we can...
  - recall it
  - use it
  - or change it later on.

syntax:
```js
let someName = value;
 ```

#### RECALL VARIABLES
```js
let bread = 10;
let butter = 5;
bread + butter; // 15
```
#### UPDATE VALUES
```js
let hens = 10;

// A person kissed 1 hanse
hans - 1; // still 10

// To actually change hens
hens = hens - 1; // Now 9
```
---

### CONST
const works just like let, except you CANNOT change the value
```js
const hens = 10;
hens = 15; // error

const age = 70;
age = age + 1; // error
```

#### WHY USE CONST?
```js
const pi = 3.14159;
const daysInWeek = 7;
const minHeightForRide = 60;
```
---

### VAR
* Before let & const, var was the only way of declaring variables. These days, there isn't really a reason to use it.
* syntax:
```js
var oldMen = 100;
```
### More on Functions
#### GOALS
- Understand Scope
- Write Higher Order Functions
- Pass functions as callbacks

### Function Scope
> Variable "visibility" : 

The location where a variable is defined dictates where we have access to that variable.

```js
function lol() {
  let person = 'Tom';
  const age = 45;
  var color = 'teal';
  console.log(age);
}

lol();
person; //DOES NOT EXIST!

function changeColor() {
  let color = 'purple';
  const age = 19;
  console.log(age);
}

changeColor();
age; //DOES NOT EXIST!
color; //DOES NOT EXIST!

let bird = 'mandarin duck';

function birdWatch() {
  let bird = 'golden pheasant';
  console.log(bird); //"golden pheasant"
}

birdWatch();
console.log(bird); //"mandarin duck"
```

### Block Scope

#### LET & CONST BLOCK SCOPED
```js
if (true) {
  const animal = 'eel';
  console.log(animal); //'eel'
}
console.log(animal); //NOT DEFINED!
```

#### VAR IS NOT BLOCK SCOPED
```js
if (true) {
  var animal = 'eel';
  console.log(animal); //'eel'
}
console.log(animal); //'eel'
```

```js
let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
var i = 10;
for (var i = 0; i < animals.length; i++) {
  console.log(i, animals[i])
}
console.log(i) // 3 (Value of i)

let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
let i = 10;
for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i])
}
console.log(i) // 10 (Value of i)
```

> Function scopes are access to block scope:
```js
function doubleArr(arr) {
  const result = []; //scoped to the function
  for (let num of arr) {
    let double = num * 2; //scoped to this loop/block
    result.push(double);
  }
  return result;
}

doubleArr([1, 2, 3]);  // [2, 4, 6]
```

### Lexical Scope
```js
function outer() {
  let movie = 'Amadeus';

  function inner() {
    // let movie = "The Shining";

    function extraInner() {
      //movie is not defined in this function
      //but it has access to parent function's variables
      console.log(movie.toUpperCase())
    }
    extraInner();
  }
  inner();
}

outer(); //'AMADEUS'
```

### Function Expressions
- There's another syntax we can use to define functions.
- Functions are stored in variables.

```js
// Function Statement
function add(x, y) {
  return x + y;
}

// Function Expression (Anonymous)
const sum = function (x, y) {
  return x + y;
}

// Function Expression (Named)
const product = function multiply(x, y) {
  return x * y;
}
```

### Higher Order Functions
- Functions that operate on/with other functions. 
- They can:
  - Accept other functions as arguments
  - Return a function
```js
function add(x, y) {
  return x + y;
}

const subtract = function (x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

const divide = function (x, y) {
  return x / y;
}

//We can store functions in an array!
const operations = [add, subtract, multiply, divide];

//Loop over single functions in operations
operations[0](100, 4);
operations[1](100, 4);
operations[2](100, 4);
operations[3](100, 4);

//Loop over all the functions in operations
for (let func of operations) {
  let result = func(30, 5); //execute func!
  console.log(result);
}
```

> Functions are also Objects.
```js
// We can also store functions in objects!
const thing = {
  doSomething: multiply
}
thing.doSomething(4, 5) //20

// the above function is just look like in-built functions
"hello".toUpperCase();
"hello".indexOf('h');
```

#### FUNCTIONS AS ARGUMENTS
```js
function cry() {
  console.log("BOO HOO I'M SO SAD!");
}

function rage() {
  console.log("I HATE EVERYTHING!");
}

// These function accepts another function as an argument

function callThreeTimes(f) {
  f();
  f();
  f();
}
callThreeTimes(cry);
callThreeTimes(rage);

function repeatNTimes(action, num) {
  for (let i = 0; i < num; i++) {
    action();
  }
}

repeatNTimes(rage, 13);
repeatNTimes(cry, 11);
```

```js
// Accepts 2 functions as arguments
// Randomly selects 1 to execute
function pickOne(f1, f2) {
  let rand = Math.random();
  if (rand < 0.5) {
    f1();
  } else {
    f2();
  }
}

pickOne(cry, rage);
```

#### FUNCTIONS AS RETURN VALUES
```js
// This function returns a function!
function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

//triple holds a function:
const triple = multiplyBy(3);
//we can call it:
triple(4); //12
triple(10); //30

const double = multiplyBy(2);
double(3); //6
double(9); //18

const halve = multiplyBy(0.5);
halve(5); //2.5
halve(100); //50
```

```js
// This function also acts as a "function factory"
function makeBetweenFunc(x, y) {
  return function (num) {
    return num >= x && num <= y;
  };
}
// This function checks if a value is between 0 and 18
const isChild = makeBetweenFunc(0, 18);
isChild(10); //true
isChild(56); //false

const isInNineties = makeBetweenFunc(1990, 1999);
isInNineties(1994); //true
isInNineties(1987); //false

const isNiceWeather = makeBetweenFunc(60, 79);
isNiceWeather(68); //true
isNiceWeather(98); //false
```

### CALLBACK
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function.
```js
function grumpus() {
  alert("GAHHH GO AWAY!"); //alert is a built-in function
}
```

```js
// setTimeout(callback, delay)
setTimeout(function () { //we pass an anonymous callback function
  alert("WELCOME!"); 
}, 5000);
```

```js
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  alert("WHY DID YOU CLICK ME!!??");
});
```

### HOISTING
Something I need to cover that you shouldn't stress about if it confuses you.
```js
// variables declared with var are hoisted
console.log(animal);
var animal = 'Tapir';
console.log(animal);
```

```js
// variables declared with let & const are not hoisted
const shrimp = 'Harlequin Shrimp';
console.log(shrimp);
```

```js
// function statements are hoisted
howl();

function howl() {
  console.log("AWOOOOOOO");
}
```

```js
// function expressions are...kind of hoisted.
// The variable is hoisted, but has a value of undefined
hoot()
var hoot = function () {
  console.log("HOOOO HOOOOO")
}
```
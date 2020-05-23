### NEW - ISH FEATURES

- Rest & Spread
- Destructuring
- Default Function Params

### GOALS
- Work with rest & spread
- Add default function parameters
- Understand destructuring


> The old way of adding a default value:
```js
function multiply(x, y) {
  if (typeof y === 'undefined') {
    y = 1;
  }
  return x * y;
}
```

> A slightly shorter version:
```js
function multiply(x, y) {
  y = typeof y === 'undefined' ? 1 : y
  return x * y;
}
```

> The new super clean way of adding defaults!
```js
function multiply(x, y = 1) {
  return x * y;
}
multiply(3, 4); //12
multiply(3); //3
```

> Another example!
```js
const greet = (person, greeting = 'hi') => {
  console.log(`${greeting}, ${person}!`)
}
```

> Default value of an array:
```js
const blah = (x, y = [1, 2, 3]) => {
  console.log(x, y);
}
```

> Multiple default values are possible, but rare
```js
const greet = (person, greeting = 'hi', punctuation = '!') => {
  console.log(`${greeting}, ${person} ${punctuation}`)
}
```

--- 

### SPREAD

Spread syntax allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

```js
function giveMeFour(a, b, c, d) {
  console.log('a', a)
  console.log('b', b)
  console.log('c', c)
  console.log('d', d)
}
```

#### In String Literals
```js
giveMeFour(...'GOAT');
// a G
// b O
// c A
// d T
```

#### In Array Literals
Create a new array using an existing array. Spreads the elements from one array into a new array.
```js
const colors = ['red', 'orange', 'yellow', 'green']

// Values are passed as separate args:
giveMeFour(...colors);
// a 'red'
// b 'orange'
// c 'yellow'
// d 'green'
```

```js
const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];


const mollusca = [...cephalopods, ...gastropods]
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish", "giant african snail", "banana slug", "variable neon slug"]

const inverts = [...cnidaria, ...gastropods, ...cephalopods]
//["fire coral", "moon jelly", "giant african snail", "banana slug", "variable neon slug", "dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]

const cephCopy = [...cephalopods];
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]
```

#### In Object Literals
Copies properties from one object into another object literal.

```js
const feline = {
  legs: 4,
  family: 'Felidae'
};

const canine = {
  family: 'Caninae',
  furry: true,
  legs: 4
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true
}
//{family: "Caninae", furry: true, legs: 4, isPet: true, adorable: true}

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: 'unpredictable'
}
//{legs: 4, family: "Felidae", isGrumpy: true, personality: "unpredictable"}

const catDog = {
  ...canine,
  ...feline
}
//{family: "Felidae", furry: true, legs: 4}

//Order matters! Legs will be 3 here, because we set it AFTER spreading canine.
const tripod = {
  ...canine,
  legs: 3,
}
//{family: "Caninae", furry: true, legs: 3}

const catDogClone = {
  ...catDog
}
```

#### THE ARGUMENTS OBJECT
- Available inside every function.
- It's an array-like object
  - Has a length property
  - Does not have array methods like push/pop
- Contains all the arguments passed to the function
- Not available inside of arrow functions!

```js
function sum() {
  //It is NOT an array, we have to turn it into one if we want to use array methods
  const argsArr = [...arguments]
  return argsArr.reduce((total, currVal) => {
    return total + currVal
  })
}
```

### REST PARAMS
Collects all remaining arguments into an actual array

```js
// OLD WAY!
// function sum() {
//   const argsArr = [...arguments]
//   return argsArr.reduce((total, currVal) => {
//     return total + currVal
//   })
// }

// New way using rest:
function sum(...nums) {
  return nums.reduce((total, currVal) => {
    return total + currVal
  })
}
```

```js
//We can have named params and then collect the rest into an array:
function fullName(first, last, ...titles) {
  console.log('first', first)
  console.log('last', last)
  console.log('titles', titles)
}
```

```js
// We can use rest parameters in arrow functions!
const multiply = (...nums) => (
  nums.reduce((total, currVal) => total * currVal)
)
```

### DESTRUCTURING
- A short,clean syntax to'unpack':
Values from arrays
Properties from objects
- Into distinct variables.

### ARRAY DESTRUCTURING
```js
const raceResults = [
  'Eliud Kipchoge',
  'Feyisa Lelisa',
  'Galen Rupp',
  'Ghirmay Ghebreslassie',
  'Alphonce Simbu',
  'Jared Ward'
];

// The old way:
// const gold = raceResults[0]
// const silver = raceResults[1]
// const bronze = raceResults[2]

// Using Destructuring:
const [gold, silver, bronze] = raceResults;
gold; //'Eliud Kipchoge'
silver; //'Feyisa Lelisa'
bronze; //'Galen Rupp'

const [first, , , fourth] = raceResults;
first; //'Eliud Kipchoge'
fourth; //'Ghirmay Ghebreslassie'

const [winner, ...others] = raceResults;
winner; //'Eliud Kipchoge'
others; //["Feyisa Lelisa", "Galen Rupp", "Ghirmay Ghebreslassie", "Alphonce Simbu", "Jared Ward"]
```

### OBJECT DESTRUCTURING
```js
const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya"
}

const { first, last, time } = runner;
const { country: nation, title: honorific } = runner;
const { first, last, ...other } = runner;
```
### NESTED DESTRUCTURING
```js
const results = [
  {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
  },
  {
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopia'
  },
  {
    first: 'Galen',
    last: 'Rupp',
    country: 'United States'
  }
]

const [{ first: goldWinner }, { country }] = results;
goldWinner; //"Eliud"
country; //"Ethiopia"
```

### PARAM DESTRUCTURING
```js
const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya"
}

// Rather than destructuring INSIDE the function body
// function print(person) {
//   const {
//     first,
//     last,
//     title
//   } = person;
//   console.log(`${first} ${last}, ${title}`)
// }

// We can unpack the values we want right in the parameter list:
function print({
  first,
  last,
  title
}) {
  console.log(`${first} ${last}, ${title}`);
}
```

```js
const response = [
  'HTTP/1.1',
  '200 OK',
  'application/json',
]

// Also works with array parameters:
function parseResponse([protocol, statusCode, contentType]) {
  console.log(`Status: ${statusCode}`);
}
```
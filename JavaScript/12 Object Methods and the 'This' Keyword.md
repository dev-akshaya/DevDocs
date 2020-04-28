### THE SECRET LIFE OF
We've seen the basics of object literals, but there is so much more to talk about with OBJECTS!

### GOALS
- Add methods to objects
- Use new object shorthand syntax
- Use computed properties
- Explain how the %$@# this works.

### SHORT HAND PROPERTIES
```js
// const getStats = (arr) => {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   const sum = arr.reduce((sum, r) => sum + r);
//   const avg = sum / arr.length;
// The "old" way:
//   return {
//     max: max,
//     min: min,
//     sum: sum,
//     avg: avg
//   }
// }

const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;
  // Using the new shorthand property syntax:
  return {
    max,
    min,
    sum,
    avg
  }
}

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
const stats = getStats(reviews);
```

```js
function pick(arr) {
  //return random element from arr
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function getCard() {
  const values = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A'
  ];
  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
  const value = pick(values);
  const suit = pick(suits)
  return {
    value,
    suit
  };
}
```

### COMPUTED PROPERTIES
We can use a variable as a key name in an object literal property!

```js
const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director'
const person2 = 'James Cameron'

// The old way: 
// Make the object
// const team = {};
// Then add a property using dynamic key:
// team[role] = person;
// team[role2] = person2;

// USING COMPUTED PROPERTIES!
const team = {
  [role]: person,
  [role2]: person2,
  [1 + 6 + 9]: 'sixteen'
}
```

```js
// function addProp(obj, k, v) {
//   const copy = {
//     ...obj
//   };
//   copy[k] = v;
//   return copy;
// }

// const addProp = (obj, k, v) => {
//   return {
//     ...obj,
//     [k]: v
//   }
// }

const addProp = (obj, k, v) => ({
  ...obj,
  [k]: v
})
const res = addProp(team, 'happy', ':)')
```

### METHODS
- We can add functions as properties on objects.
- We call them methods!

```js
// Adding methods to an object!
const math = {
  numbers: [1, 2, 3, 4, 5],
  add: function (x, y) {
    return x + y;
  },
  multiply: function (x, y) {
    return x * y;
  }
}

// To execute multiply:
math.multiply(5, 9); //45
```

### SHORTHAND
We do this so often that there's a new shorthand way of adding methods.

```js
const auth = {
  username: 'TommyBot',
  login() {
    console.log("LOGGED YOU IN!")
  },
  logout() {
    console.log("GOODBYE")
  }
}
```

### THIS
The keyword this can be a major point of confusion and misery and hardship and general suffering in the life of a new JS developer.

```js
function sayHi() {
  console.log("HI")
  //this refers to the window (global scope object in the browser)
  console.log(this);
}

const greet = function () {
  //this refers to the window (global scope object in the browser)
  console.log(this);
}
```

```js
const person = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickName: 'Cher',
  fullName() {
    //In a method, this refers to the object the method "lives" in:
    const {
      first,
      last,
      nickName
    } = this;
    return `${first} ${last } AKA ${nickName}`;
  },
  printBio() {
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`)
  }
}
```

### THIS: invocation context

The value of this depends on the invocation context of the function it is used in.

```js
function sayHi() {
  console.log("HI")
  //this refers to the window (global scope object in the browser)
  console.log(this);
}

const person = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickName: 'Cher',
  fullName() {
    //In a method, this refers to the object the method "lives" in
    const {
      first,
      last,
      nickName
    } = this;
    return `${first} ${last } AKA ${nickName}`;
  },
  printBio() {
    console.log(this);
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`)
  },
  laugh: () => {
    //Arrow functions don't get their 'own' this.
    console.log(this);
    console.log(`${this.nickName} says HAHAHAHAH`)
  }
}

// INVOCATION CONTEXT MATTERS!!!
person.printBio(); //THIS refers to the person object

const printBio = person.printBio;
printBio(); //THIS refers to window object
```

### Annoyomatic Demo
```js
const annoyer = {
  phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
  pickPhrase() {
    const {
      phrases
    } = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx]
  },
  start() {
    //Use an arrow function to avoid getting a different 'this':
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase())
    }, 3000)
  },
  stop() {
    clearInterval(this.timerId);
    console.log("PHEW THANK HEAVENS THAT IS OVER!")
  }
}
```

## Putting All Together : Deck of Cards

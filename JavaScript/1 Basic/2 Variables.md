### Variables - var, let & const

- Can start with letters, numbers, _, $
- Can't start with number

```js
// Initialize variable
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);
```

```js
// Reassign Variables
var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);
```

```js
// Multi word vars
var firstName = 'John'; // Camel case
var first_name = 'Sara'; // Underscore
var FirstName = 'Tom'; // Pascal case
var firstname;
```

```js
// LET
let name;
name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);
```

```js
// CONST
const name = 'John';
console.log(name);
// Can not reassign // name = 'Sara';
// Have to assign a value
```

```js
// CONST can be changed in case of reference variables
const person = {
  name: 'John',
  age: 30
}
person.name = 'Sara';
person.age = 32;
console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);
console.log(numbers);
```
---
## 5 Object Oriented JavaScript - ES5 & ES2015

### 1. Constructors & the 'this' Keyword
- Instead of creating multiple objects we create a constructor.
- new Date, Math these are also global constructor.
- 'this' keyword is mainly used to access functional level variables but if you use them in global level then it will access the window.

```JS
// Person constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff =  Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// const brad = new Person('Brad', 36);
// const john = new Person('John', 30);

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());
```
---

### 2. Built In Constructors
- Don't Use them.
- They can show incorrect results while camparing (===).
```JS
// String

const name1 = 'Jeff';
const name2 = new String('Jeff');

//name2.foo = 'bar';
// console.log(name2);

console.log(typeof name2);

if(name2 === 'Jeff'){
  console.log('YES');
} else {
  console.log('NO');
}

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function(x, y){
  return x + y;
}

const getSum2 = new Function('x','y', 'return 1 + 1');

// Object
const john1 = {name: "John"};
const john2 = new Object({name: "John"});
console.log(john2);

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re2);
```

---
### 3. Prototypes Explained
>Object.prototype and Function.prototype/Person.prototype

- functions are used as method but it's the ideal way of doing that when the method was common for all so we will use this as "Prototypes".

```JS
// Person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff =  Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
```

> Constructor
```JS
// Person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
}
```
> Prototypes of the above Constructor
```JS
// Calculate age
Person.prototype.calculateAge = function(){
  const diff =  Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMaried = function(newLastName){
  this.lastName = newLastName;
}
```
> Access Data Using Prototypes
```JS
const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);

console.log(john.calculateAge());

console.log(mary.getFullName());
```

> Manipulate Data Using Prototypes
```JS
mary.getsMaried('Smith');

console.log(mary.getFullName());
```

> Build in Prototypes
```JS
console.log(mary.hasOwnProperty('firstName')); // true
console.log(mary.hasOwnProperty('getFullName')); // false
```
---

### 4. Prototypal Inheritance
> Person constructor
```JS
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Prototype (Greeting) - Person
Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`;
}
```

> Customer constructor
```JS
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}
```

> Inherit and return Person prototype methods
```JS
// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;
```

> Create Person and Customer
```JS
const person1 = new Person('John', 'Doe');
console.log(person1.greeting());

const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');
console.log(customer1);
```

> Override Prototype (Greeting) - Person
```JS
// Customer greeting
Customer.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}

console.log(customer1.greeting());
```
---

### 5. Using Object.create
> Create a Prototype
```JS
const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}
```

> Create Object Using (Object.create)
```JS
const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;
mary.getsMarried('Thompson');

console.log(mary.greeting());
```

> Another Method of Creating Object Using (Object.create)
```JS
const brad = Object.create(personPrototypes, {
  firstName: {value: 'Brad'},
  lastName: {value: 'Traversy'},
  age: {value: 36}
});

console.log(brad);
console.log(brad.greeting());
```
---

### 6. ES6 Classes
- Prototypes are declared as nornal function within classes no need to write prototype keyword (syntactic sugar).
- We can also declare static functions that menas we dont need to pass the parameter values while creating the object.
- While calling the static function we have to add the class name.
```JS
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  // Static Functions
  static addNumbers(x, y) {
    return x + y;
  }
}
```

> Creating Objects
```JS
const mary = new Person('Mary', 'Williams', '11-13-1980');
```

> Calling a Prototype
```JS
mary.getsMarried('Thompson');
```

> Calling Static Functions
```JS
console.log(Person.addNumbers(1,2));
```

> Console Created Object
```JS
console.log(mary);
```
---

### 7. Sub Classes
- We can use the prototypes of Parent class
- super() is used to call the variables of Parent class
- prototypes and static functions declared in sub class are limited to sub class only.

> Parent Class
```JS
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}
```

> Sub Class
```JS
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}
```

> Creating Object and Calling Prototypes
```JS
const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(john.greeting());

console.log(Customer.getMembershipCost());
```
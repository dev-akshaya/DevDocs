### Prototypal Inheritance

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
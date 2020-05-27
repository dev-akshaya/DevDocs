### Classes
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

### Sub Classes
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
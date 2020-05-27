### Prototypes Explained
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
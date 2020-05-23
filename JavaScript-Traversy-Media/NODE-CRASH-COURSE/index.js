const student = require('./person');
const Person = require('./person');

console.log("Hello World");

console.log(student);
console.log(student.age);

const person1 = new Person("Akshaya Kumar", 26);

console.log(person1);
person1.greeting();
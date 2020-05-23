const student = {
  name: "Alex",
  age: 25
}

class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  greeting(){
    console.log(`My name is ${this.name} and i am ${this.age}`);
  }
}

// console.log(__filename);
// console.log(__dirname);

module.exports = student;
module.exports = Person;
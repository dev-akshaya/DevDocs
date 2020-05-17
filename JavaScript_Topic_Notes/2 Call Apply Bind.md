### Call()
```JS
const person1 = {
  name: "Akshaya",
  age: 25,
  job: "Developer",
  feature: function(office, language) {
    console.log(`My name is ${this.name} and i am currently working on ${office} on ${language}`);
  }
}

person1.feature("OSL", "JavaScript");

const person2 = {
  name: "Sanu",
  age: 25,
  job: "Developer"
}

person1.feature.call(person2, "OSL", "JavaScript");
```

<!-- My name is Akshaya and i am currently working on OSL on JavaScript

My name is Sanu and i am currently working on OSL on JavaScript -->

### apply()
```JS
const person1 = {
  name: "Akshaya",
  age: 25,
  job: "Developer",
  feature: function(office, language) {
    console.log(`My name is ${this.name} and i am currently working on ${office} on ${language}`);
  }
}

person1.feature("OSL", "JavaScript");

const person2 = {
  name: "Sanu",
  age: 25,
  job: "Developer"
}

person1.feature.apply(person2, ["OSL", "JavaScript"]);
```

<!-- My name is Akshaya and i am currently working on OSL on JavaScript

My name is Sanu and i am currently working on OSL on JavaScript -->

```JS
let arrMax = Math.max.apply(null, [1,2,3,4]);
console.log(arrMax);
```

### bind()
```JS
const person = {
  name: "Akshaya",
  job: "Developer",
  feature: function(language) {
    console.log(`My name is ${this.name} and i am currently working as a ${this.job} on ${language} language`);
  }
}

let desc = person.feature.bind(person);

desc('JavaScript');
```

```JS
const person = {
  name: "Akshaya",
  job: "Developer",
}

function feature(language) {
  console.log(`My name is ${this.name} and i am currently working as a ${this.job} on ${language} language`);
}

let desc = feature.bind(person);

desc('JavaScript');
```
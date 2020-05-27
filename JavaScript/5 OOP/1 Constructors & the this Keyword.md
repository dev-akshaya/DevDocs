### Constructors & the this Keyword
- Instead of creating multiple objects we create a constructor.
- new Date, Math these are also global constructor.
- 'this' keyword is mainly used to access functional level variables but if you use them in global level then it will access the window.

```JS
// Person constructor
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff =  Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());
```
---
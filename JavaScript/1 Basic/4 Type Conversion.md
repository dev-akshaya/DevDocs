### Type Conversion
```js
let val;

// Number to string
val = String(555);
val = String(4+4);

// Bool to string
val = String(true);

// Date to string
val = String(new Date());

// Array to string
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1,2,3]);

val = parseInt('100.30');
val = parseFloat('100.30');

// Output
console.log(val);
console.log(typeof val);

// A string method 
console.log(val.length);

// A number method 
console.log(val.toFixed(2));
```

```js
const val1 = String(5);
const val2 = 6;
const sumStr = val1 + val2;
const sumNum = Number(val1 + val2);

console.log(sumStr);
console.log(typeof sumStr);

console.log(sumNum);
console.log(typeof sumNum);
```
---
### If Statements

```JS
const id = 100;

// // EQUAL TO
if(id == 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// // NOT EQUAL TO
if(id != 101){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// // EQUAL TO VALUE & TYPE
if(id === 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// // EQUAL TO VALUE & TYPE
if(id !== 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// Test if undefined
if(typeof id !== 'undefined'){
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
}

// GREATER OR LESS THAN
if(id <= 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// IF ELSE
const color = 'yellow';

if(color === 'red'){
  console.log('Color is red');
} else if(color === 'blue'){
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue');
}

// WITHOUT BRACES
if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');

if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');
```

### BOOLEAN LOGIC
- Understand Comparison Operators
- Write Conditionals
- Work with Boolean Operators

### COMPARISONS
```js
  > // Greater then
  < // Less then
  >= // Greater then equals to
  <= // Less then equals to
  = // Equals to
  != // Not Equals to
  === // Strict equality
  !== // Strict non equality
```

## Some Examples
```js
  10 > 1; // true
  0.2 > 0.3; // false
  -10 < 0; // true
  'a' < 'b'; // true
  'A' > 'a'; // false
``` 
### == (double equals)
  - Checks for equality of value, but not equality of type.
  - It coerces both values to the same type and then compares them.
  - This can lead to some unexpected results!

```js
  0 == ''; // true
  0 == false; // true
  null == undefined; // true
```

### === (triple equals)
 Checks for equality of value AND type

 ```js
  0 == ''; // false
  0 == false; // false
  null == undefined; // false
```

### IF 
Run code if a given condition is true
```js
if (1 === 1) {
	console.log("It's True!");
}
```
```js
let rating = 3;

if (rating === 3) {
	console.log('YOU ARE A SUPERSTAR!');
}
```
```js
let num = 37;

if (num % 2 !== 0) {
	console.log('ODD NUMBER!');
}
```

### Else if
You can have multiple else ifs
```js
// Performance Review

let rating = 1;

if (rating === 3) {
	console.log('YOU ARE A SUPERSTAR!');
}
else if (rating === 2) {
	console.log('MEETS EXPECTATIONS');
}
else if (rating === 1) {
	console.log('NEEDS IMPROVEMENT');
}
```

### Else
If nothing else was true, do this...
```js
let highScore = 1430;
let userScore = 1600;

if (userScore >= highScore) {
	console.log(`Congrats, you have the new high score of ${userScore}`);
	highScore = userScore;
}
else {
	console.log(
		`Good Game.  Your score of ${userScore} did not beat the high score of ${highScore}`
	);
}
```

### Nesting Conditions
We can nest conditionals inside conditionals
```js
//We can nest conditionals!
let password = 'hello  kitty';

if (password.length >= 6) {
	if (password.indexOf(' ') === -1) {
		console.log('Valid Password!');
	}
	else {
		console.log('Password is long enough, but cannot contain spaces');
	}
}
else {
	console.log('Password must be longer!');
}
```

### TRUTHY & FALSY VALUES
- All values have an inherent truthy or falsy boolean value
- Falsy values:
  - false
  - 0
  - "" (empty string)
  - null
  - undefined
  - NaN
- Everything else is truthy!

```js
// FALSY:
let loggedInUser = null;

// TRUTHY:
// let loggedInUser = 'Thomas123';

if (loggedInUser) {
	console.log('YOU ARE LOGGED IN!');
}
else {
	console.log('PLEASE LOG IN!');
}
```

### LOGICAL OPERATORS
- &&
- ||
- !

### AND (&&)
Both sides must be true in order for the whole thing to be true

```js
let password = 'chicken Gal';

if (password.length >= 8 && password.indexOf(' ') === -1) {
	console.log('VALID PASSWORD');
}
else {
	console.log('INVALID PASSWORD');
}
```
```js
// Number must be between 1 and  10
let num = 1;

if (num >= 1 && num <= 10) {
	console.log('Number is between 1 and 10');
}
else {
	console.log('Please guess a number between 1 and 10');
}
```

### OR (||)
(pipe character above enter key) If one side is true, the whole thing is true
```js
let age = 77;
if (age < 6 || age >= 65) {
	console.log('YOU GET IN FOR FREE');
}
else {
	console.log('YOU MUST PAYYYY!');
}
```
```js
// WE CAN USE MULTIPLE OR's:
let color = 'violet';
if (color === 'purple' || color === 'lilac' || color === 'violet') {
	console.log('GREAT CHOICE!');
}
```

### NOT (!)
!expression returns true if the expression is false
```js
let loggedInUser;

// If there isn't a logged in user...
if (!loggedInUser) {
	console.log('GET OUT OF HERE!');
}
```
```js
// WE ONLY HAVE GRAPE AND CHERRY FLAVORS!
let flavor = 'watermelon';

//ONE WAY OF WRITING THIS:
if (flavor !== 'grape' && flavor !== 'cherry') {
	console.log('WE DONT HAVE THAT FLAVOR!');
}
// ANOTHER WAY:
if (!(flavor === 'grape' || flavor === 'cherry')) {
	console.log('WE ONLY HAVE GRAPE AND CHERRY!');
}
```

### OPERATOR PRECEDENCE
NOT (!) has higher precedence than && and || && has higher precedence than ||
> ! && ||

You can alter this using parens ()
```js
let x = 7;

// THIS VERSION RETURNS TRUE
//&& runs before ||
//x == 7 || x === 3 && x > 10;

// THIS VERSION RETURNS FALSE
// Use parens to change order
(x == 7 || x === 3) && x > 10;
```
### SWITCH STATEMENT
```JS
switch (day) {
	case 1:
		console.log('MONDAY');
		break;
	case 2:
		console.log('TUESDAY');
		break;
	case 3:
		console.log('WEDNESDAY');
		break;
	case 4:
		console.log('THURSDAY');
		break;
	case 5:
		console.log('FRIDAY');
		break;
	case 6:
		console.log('SATURDAY');
		break;
	case 7:
		console.log('SUNDAY');
		break;
	default:
		console.log('INVALID DAY');
}
```
```JS
let emoji = 'heart';

// Switch with overlapping cases...
switch (emoji) {
	case 'sad face':
	case 'happy face':
		console.log('yellow');
		break;
	case 'eggplant':
		console.log('purple');
		break;
	case 'heart':
	case 'lips':
		console.log('red');
		break;
}
```
### TERNARY OPERATOR
condition ? expIfTrue: expIfFalse
```js
let num = 7;

// Without Ternary Operator...
// if (num === 7) {
// 	console.log('lucky!');
// }
// else {
// 	console.log('BAD!');
// }

// Same thing written with Ternary Operator...
num === 7 ? console.log('lucky!') : console.log('BAD!');
```
```js
let status = 'offline';

// Without ternary operator
// let color;
// if (status === 'offline') {
// 	color = 'red';
// }
// else {
// 	color = 'green';
// }

// One-liner using Ternary Operator...
let color = status === 'offline' ? 'red' : 'green';
console.log(color);
```
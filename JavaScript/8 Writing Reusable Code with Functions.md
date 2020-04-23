### FUNCTIONS
#### GOALS
- Write valid functions
- Write functions with arguments
- Compare function expressions &
- function statements
- Write a bunch of functions!

#### INPUTS
Right now, our simple functions accept zero inputs. They behave the same way every time.

> We've seen this before

```js
"hello".toUpperCase();
"hello".indexOf('h');
```

#### DEFINE
```js
function funcName(){
  //do something
}
```

#### RUN
```js
funcName(); //run once
funcName(); //run again!
```
#### FUNCTIONS - Reusable Procedures
- Functions allow us to write reusable, modular code
- We define a "chunk" of code that we can then execute at a later point.
- We use them ALL THE TIME


### Our First Function
```js
// STEP 1: Define the function:
function grumpus() {
	console.log('ugh...you again...');
	console.log('FOR THE LAST TIME...');
	console.log('LEAVE ME ALONE!!!');
}
// STEP 2: Call the function:
grumpus();
grumpus();
grumpus();
```
```js
for (let i = 0; i < 50; i++) {
	grumpus();
}
```

### Dice Roll Functions
- Define our first function
- Pick a random number from 1-6
- Math.random() gives us a decimal from 0-1
- We multiply by 6, so now we have a random number between 0 up to 6 (but not including 6).  Something like 3.490823 or 5.991234
- Then we floor to remove the decimal,  leaving us with a whole number from 0-5
- Lastly we add one, to get a number between 1 and 6

```js
function rollDie() {
	let roll = Math.floor(Math.random() * 6) + 1;
	console.log(`Rolled: ${roll}`);
}

// We can call functions inside of other functions!
function throwDice() {
	rollDie();
	rollDie();
	rollDie();
	rollDie();
	rollDie();
	rollDie();
}

//Call it!
throwDice();
```

### ARGUMENTS
We can also write functions that accept inputs, called arguments.

#### Single Arguments
```js
// greet now expects a single argument
function greet(nickname) {
	console.log(`Hi, ${nickname}!`);
}
greet('Sansa');
greet('Ramsay');
```

```js
function rollDie() {
	let roll = Math.floor(Math.random() * 6) + 1;
	console.log(`Rolled: ${roll}`);
}

// We can now specify how many dice to roll!
function throwDice(numRolls) {
	for (let i = 0; i < numRolls; i++) {
		rollDie();
	}
}

throwDice(2);
throwDice(6);
```

#### Multiple Arguments
```js
function square(num) {
	console.log(num * num);
}

function sum(x, y) {
	console.log(x + y);
}

function divide(a, b) {
	console.log(a / b);
}
```
### NO RETURN !
Our functions print values out, but do NOT return anything.
```js
// No return!
function add(x, y) {
	console.log(x + y);
}
```

### RETURN
- Built-in methods return values when we call them. We can store those values also.
- The return statement ends function execution AND specifies the value to be returned by that function
- Now we can capture a return value in a variable!

```js
// This version returns the sum of x & y;
function add(x, y) {
	return x + y;
}

const total = add(4, 9); //13 : We can capture the return value:
```

```js
function square(x) {
	return x * x;
	console.log('ALL DONE!'); //this NEVER runs;
}
```

### Different ways of writing a function
```js
function isPurple(color) {
	if (color.toLowerCase() === 'purple') {
		return true;
	}
	else {
		return false;
	}
}

// We don't need the else!
function isPurple(color) {
	if (color.toLowerCase() === 'purple') {
		return true;
	}
	return false;
}

// An even shorter way!
function isPurple(color) {
	return color.toLowerCase() === 'purple';
}

function containsPurple(arr) {
	for (let color of arr) {
		if (color === 'purple' || color === 'magenta') {
			return true;
		}
	}
	return false;
}
```

### Write A Function To Check Valid Password
- Write a isValidPassword function
- It accepts 2 arguments: password and username
- Password must:
  - be at least 8 characters
  - cannot contain spaces
  - cannot contain the username
- If all requirements are met, return true otherwise false.

> hint
- isValidPassword('89Fjj1nms', 'dogLuvr');  true
- isValidPassword('dogLuvr123!', 'dogLuvr') false
- isValidPassword('hello1', 'dogLuvr') false

```js
function isValidPassword(password, username) {
	if (password.length < 8) {
		return false;
	}
	if (password.indexOf(' ') !== -1) {
		return false;
	}
	if (password.indexOf(username) !== -1) {
		return false;
	}
	return true;
}
```

```js
function isValidPassword(password, username) {
	if (
		password.length < 8 ||
		password.indexOf(' ') !== -1 ||
		password.indexOf(username) !== -1
	) {
		return false;
	}
	return true;
}
```

```js
function isValidPassword(password, username) {
	const tooShort = password.length < 8;
	const hasSpace = password.indexOf(' ') !== -1;
	const tooSimilar = password.indexOf(username) !== -1;
	if (tooShort || hasSpace || tooSimilar) return false;
	return true;
}
```

```js
function isValidPassword(password, username) {
	const tooShort = password.length < 8;
	const hasSpace = password.indexOf(' ') !== -1;
	const tooSimilar = password.indexOf(username) !== -1;
	if (!tooShort && !hasSpace && !tooSimilar) return true;
	return false;
}
```

```js
function isValidPassword(password, username) {
	const tooShort = password.length < 8;
	const hasSpace = password.indexOf(' ') !== -1;
	const tooSimilar = password.indexOf(username) !== -1;
	return !tooShort && !hasSpace && !tooSimilar;
}
```

### Write a function to find the average value in an array of numbers

> hint
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

```js
function avg(arr) {
	let total = 0;
	//loop over each num
	for (let num of arr) {
		//add them together
		total += num;
	}
	//divide by number of nums
	return total / arr.length;
}
```

### To check a sentence if it is pangram or not

- Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.
- Make sure you igore string casing!

> hints
- ispangram("The quick brown fox jumps over the lazy dog") true
- isPangram('The five boxing wizards jump quickly') true
- isPangram('The five boxing wizards jump quick') false

```js
// Version using indexOf
function isPangram(sentence) {
	let lowerCased = sentence.toLowerCase();
	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		if (lowerCased.indexOf(char) === -1) {
			return false;
		}
	}
	return true;
}
```

```js
// Version using string.includes()
function isPangram(sentence) {
	let lowerCased = sentence.toLowerCase();
	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		if (!lowerCased.includes(char)) {
			return false;
		}
	}
	return true;
}
// Nice and clean, but not supported in IE
```
### Write a getCard() function which returns a random playing card object:

> hints
```js
{
	value: 'K'
	suit: 'clubs'
}
```

- Pick a random value from: 1,2,3,4,5,6,7,8,9,10,J,Q,K,A
- Pick a random suit from: clubs,spades, hearts, diamonds
- Return both in an object

```js
function getCard() {
	const values = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'J',
		'Q',
		'K',
		'A'
	];
	const valIdx = Math.floor(Math.random() * values.length);
	const value = values[valIdx];

	const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
	const suitIdx = Math.floor(Math.random() * suits.length);
	const suit = suits[suitIdx];
	return { value: value, suit: suit };
}

getCard();
getCard();
getCard();
getCard();
```

```js
//return random element from arr
function pick(arr) {
	const idx = Math.floor(Math.random() * arr.length);
	return arr[idx];
}

function getCard() {
	const values = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'J',
		'Q',
		'K',
		'A'
	];
	const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
	return { value: pick(values), suit: pick(suits) };
}
```
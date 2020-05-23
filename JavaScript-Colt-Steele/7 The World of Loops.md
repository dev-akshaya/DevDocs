### JS LOOPS - Repeating Code
GOALS
- Write for loops
- Write while loops
- Avoid infinite loops!
- Iterate over arrays and objects
 
 ### LOOPS
Doing things repeatedly
  - Loops allow us to repeat code
    - "Print 'hello' 10 times
    - Sum all numbers in an array
  - There are multiple types:
    - for loop
    - while loop
    - for...of loop
    - for...in loop

### FOR LOOPS
```js
	for (
		[initialExpression];
		[condition];
		[incrementExpression]
	)
```

```js
	// Print Hello 10 times:
	for (let i = 1; i <= 10; i++) {
		console.log('HELLO:', i);
	}

	// Counting by 3's:
	for (let i = 1; i <= 10; i += 3) {
		console.log('HELLO:', i);
	}

	// Printing first 20 perfect squares:
	for (let num = 1; num <= 20; num++) {
		console.log(`${num}x${num} = ${num * num}`);
	}

	// Counting DOWN from 200 by intervals of 25:
	for (let i = 200; i >= 0; i -= 25) {
		console.log(i);
	}
	console.log('AFTER THE LOOP!');
```

### INFINITE LOOPS
```js
	// DON'T RUN THIS!
	for (let i = 1; i !== 20; i += 2) {
		console.log(i);
	}
```

### FOR LOOPS + ARRAYS
To loop over an array, start at 0 and continue to the last index (length-1)

```js
	// ==================================
	// Printing each element in an array
	// ==================================
	const examScores = [ 98, 77, 84, 91, 57, 66 ];

	for (let i = 0; i < examScores.length; i++) {
		console.log(i, examScores[i]);
	}
	```
	```js

	// =========================================
	// Same idea, but with a more complex array
	// =========================================
	const myStudents = [
		{
			firstName : 'Zeus',
			grade     : 86
		},
		{
			firstName : 'Artemis',
			grade     : 97
		},
		{
			firstName : 'Hera',
			grade     : 72
		},
		{
			firstName : 'Apollo',
			grade     : 90
		}
	];

	for (let i = 0; i < myStudents.length; i++) {
		let student = myStudents[i];
		console.log(`${student.firstName} scored ${student.grade}`);
	}
```

```js
	// ==========================================
	// Averaging all grades in myStudents array
	// ==========================================
	let total = 0; //total will hold the sum of all grades

	for (let i = 0; i < myStudents.length; i++) {
		let student = myStudents[i];
		total += student.grade; //add each grade to total
	}
	console.log(total / myStudents.length); //divide by number of students
```

```js
	// ===================
	// Reversing a string
	// ===================
	const word = 'stressed';
	let reversedWord = ''; //will hold reversed string

	//Loop backwards over the string
	for (let i = word.length - 1; i >= 0; i--) {
		reversedWord += word[i]; //add each char to reversedWord
	}
	console.log(reversedWord);
```

### NESTED LOOPS
```js
	for (let i = 1; i <= 10; i++) {
		console.log('OUTER LOOP:', i);
		for (let j = 10; j >= 0; j -= 2) {
			console.log('  INNER LOOP', j);
		}
	}
```
```js
	// Sum all elements in our 2048 board
	const gameBoard = [
		[ 4, 32, 8, 4 ],
		[ 64, 8, 32, 2 ],
		[ 8, 32, 16, 4 ],
		[ 2, 8, 4, 2 ]
	];

	let totalScore = 0;
	for (let i = 0; i < gameBoard.length; i++) {
		let row = gameBoard[i];
		for (let j = 0; j < row.length; j++) {
			totalScore += row[j];
		}
	}
	//outer loop iterates through the rows
	//inner loop iterates over each cell in a given row
```

### WHILE LOOPS
A while loop continues to run as long as its test condition is true

```js
	for (let i = 0; i <= 5; i++) {
		console.log(i);
	}

	//Recreating the above for loop w/ a while loop:
	let j = 0;
	while (j <= 5) {
		console.log(j);
		j++;
	}
```

### A COMMON PATTERN
```js
	// Pick a target number we are trying to guess
	const target = Math.floor(Math.random() * 10);
	// Make initial guess
	let guess = Math.floor(Math.random() * 10);

	// Continue looping while guess is not the target num
	while (guess !== target) {
		console.log(`Target: ${target} Guess: ${guess}`);
		// IMPORTANT!!
		// Update the value of guess each time through the loop
		guess = Math.floor(Math.random() * 10);
	}
	console.log(`Target: ${target} Guess: ${guess}`);
	console.log(`CONGRATS YOU WIN!!`);
```

### BREAK KEYWORD
```js
	const target = Math.floor(Math.random() * 10);
	let guess;
	//ANOTHER APPROACH TO THE PREVIOUS GUESSING 'GAME'
	while (true) {
		if (target === guess) break; //Break stops the loop in its tracks
		console.log(`Target: ${target} Guess: ${guess}`);
		guess = Math.floor(Math.random() * 10);
	}
	console.log(`Target: ${target} Guess: ${guess}`);
	console.log(`CONGRATS YOU WIN!!`);
```

### FOR...OF
A nice and easy way of iterating over arrays
```js
	for (variable of iterable) {
		statement 
		}
```
```js
	let subreddits = [ 'soccer', 'popheads', 'cringe', 'books' ];
	// With a standard for loop
	for (let i = 0; i < subreddits.length; i++) {
		console.log(subreddits[i]);
	}
	//Much cleaner  with a for...of loop!
	for (let sub of subreddits) {
		console.log(sub);
	}
	//Works with other iterables, like strings!
	for (let char of 'cockadoodledoo') {
		console.log(char.toUpperCase());
	}
```

### COMPARING FOR AND FOR...OF
```js
const magicSquare = [ [ 2, 7, 6 ], [ 9, 5, 1 ], [ 4, 3, 8 ] ];

// Version using a for loop...
	for (let i = 0; i < magicSquare.length; i++) {
		let row = magicSquare[i];
		let sum = 0;
		for (let j = 0; j < row.length; j++) {
			sum += row[j];
		}
		console.log(`${row} summed to ${sum}`);
	}

	// Much cleaner version using a for...of
	for (let row of magicSquare) {
		let sum = 0;
		for (let num of row) {
			sum += num;
		}
		console.log(`${row} summed to ${sum}`);
	}
```

```js
	// If you need the indices, use a traditional for loop!
	const words1 = [ 'mail', 'milk', 'bath', 'black' ];
	const words2 = [ 'box', 'shake', 'tub', 'berry' ];

	for (let i = 0; i < words1.length; i++) {
		//Access index i of both arrays
		console.log(`${words1[i]}${words2[i]}`);
	}
```

### OBJECTS!
We can loop over the keys of an object, using Object.keys()
```js
	const movieReviews = {
		Arrival                : 9.5,
		Alien                  : 9,
		Amelie                 : 8,
		'In Bruges'            : 9,
		Amadeus                : 10,
		'Kill Bill'            : 8,
		'Little Miss Sunshine' : 8.5,
		Coraline               : 7.5
	};

	// THIS DOES NOT WORK!
	// OBJECTS ARE NOT ITERABLE (can't use a for...of loop)
	// for (let x of movieReviews) {
	// 	console.log(x);
	// }
```

```js
	// We can iterate over the keys of an object
	for (let movie of Object.keys(movieReviews)) {
		console.log(`You rated ${movie} - ${movieReviews[movie]}`);
	}
```

```js
	// We can also iterate over the values
	// To calculate the average movie rating:
	const ratings = Object.values(movieReviews);
	let total = 0;
	for (let r of ratings) {
		total += r;
	}
	let avg = total / ratings.length;
	console.log('Average Rating: ', avg);
```

### FOR...IN
Loop over the keys in an object

```js
	for (variable in object) {
		statement 
	}
```

```js
	const jeopardyWinnings = {
		regularPlay: 100,
		watsonChallenge: 200,
		tourName: 300,
		battleChallenge: 400
	};

	let total = 0;
	for (let key in jeopardyWinnings) {
		total += jeopardyWinnings[key];
	}
	console.log(total);
	console.log(`Akshaya's total winning Points: $${total}`);
```
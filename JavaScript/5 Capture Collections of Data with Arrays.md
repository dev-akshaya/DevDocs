### ARRAYS & OBJECTS 
GOALS
- Collections of Data
- Work with Arrays
- Write Object Literals
- Understand Reference Types
- Use common Array/Object methods

 
### ARRAYS
Ordered collections of values.
- List of comments on IG post
- Collection of levels in a game
- Songs in a playlist

### CREATING ARRAYS
```js
//An empty array:
let todoList = [];

//Array of strings:
let shoppingList = [ 'cereal', 'cheese', 'ice' ];

// Array of numbers:
let lotto = [ 45, 12, 23, 25, 34 ];

// Array of multiple types:
let myCollection = [ 12, 'dog', true, null, NaN ];
```

### ARRAYS ARE INDEXED
```js
let colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ];

// Arrays have a length
colors.length; //7

//Access elements using index:
colors[0]; //'red'

colors[6]; //'violet'

colors[7]; //undefined
```
### MODIFYING ARRAYS
```js
let shoppingList = [ 'Cheddar Cheese', '2% Milk' ];

shoppingList[1] = 'Whole Milk';
shoppingList[2] = 'Ice Cream';

//To make sure you add to the end, no matter the length of the array:
shoppingList[shoppingList.length] = 'Tomatoes';
shoppingList[shoppingList.length] = 'Potatoes';
```

### ARRAY METHODS
- Push - add to end
- Pop - remove from end
- Shift - remove from start
- Unshift - add to start

```js
let topSongs = [
	'First Time Ever I Saw Your Face',
	'God Only Knows',
	'A Day In The Life',
	'Life On Mars'
];

// To add to the end of an array:
topSongs.push('Fortunate Son');
topSongs.push(12324166);

// To remove the last item
topSongs.pop(); //12324166
```
```js
let dishesToDo = [ 'large platter', 'plate' ];

//to add to the start:
dishesToDo.unshift('spoon');

//remove from the start:
dishesToDo.shift();
```

### MORE ARRAY METHODS!
- concat - merge arrays
- includes - look for a value
- indexOf - just like str.indexOf
- join - creates a string from arr
- reverse - reverses an array!
- slice - copy portion of an arr
- splice - remove/replace elements
- sort - sorts an array

```js
let fruits = [ 'apple', 'banana' ];
let veggies = [ 'asparagus', 'brussel sprouts' ];
let meats = [ 'steak', 'chicken breast' ];

console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));

let allFoods = fruits.concat(veggies, meats);
```

```js
let ingredients = [
	'water',
	'corn starch',
	'flour',
	'cheese',
	'brown sugar',
	'shrimp',
	'eel',
	'butter'
];

//includes returns true or false
if (ingredients.includes('flour')) {
	console.log('I AM GLUTEN FREE, I CANNOT EAT THAT!');
}

//indexOf returns an index (or -1 if not found)
if (ingredients.indexOf('shrimp') !== -1) {
	console.log('Sorry, I hate shrimp.');
}
```

```js
let letters = [ 'T', 'C', 'E', 'P', 'S', 'E', 'R' ];

//It reverses IN PLACE rather than making a copy
let song = letters.reverse().join('.');
//"R.E.S.P.E.C.T"
```

```js
let animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];

let swimmers = animals.slice(0, 3);
let mammals = animals.slice(2, 4);
let reptiles = animals.slice(4);
let quadruped = animals.slice(-3);
```

```js
let animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];

//splice(startIdx, deleteCount, itemsToInsert);

// =====================
// INSERTING w/ SPLICE
// =====================
// 'at index 1, delete 0 items and insert "octopus"'
animals.splice(1, 0, 'octopus');
//["shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise"]

// =====================
// DELETING w/ SPLICE
// =====================
//'at index 5, delete 2 items'
animals.splice(5, 2);
//["shark", "octopus", "salmon", "whale", "bear"]

// =====================
// REPLACING w/ SPLICE
// =====================
//'at index 3, delete 2 items and replace them with "orca" and "grizzly"'
animals.splice(3, 2, 'orca', 'grizzly');
// ["shark", "octopus", "salmon", "orca", "grizzly"]
```

```js
//Sorts by converting values to strings and comparing their UTF-16 character codes.

let people = [ 'Mrs. Robsinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne' ];
people.sort();
// ["Angie", "Jolene", "Maggie May", "Mrs. Robsinson", "Roxanne"]

let nums = [ 34, 10, 100000, 67, 99 ];
nums.sort();
//[10, 100000, 34, 67, 99]
```

### VALUE TYPES VS. REFERENCE TYPE

```js
// ===============
// VALUE TYPES
// ===============
//Value Types - the variable stores the actual value:

let x = 100;
let y = x;

//If we change x
x = 99;
//y is unchanged
y; //100

// ===============
// REFERENCE TYPES
// ===============

// Array variables do not hold the actual array
//Instead, they store a REFERENCE to the array

let nums = [ 2, 4, 6, 8 ];
let myNums = nums; //myNums references the same array

// If we change nums
nums.push('BOO!');

//My nums is also changed:
myNums; //[2, 4, 6, 8, "BOO!"]
```

### USING CONST WITH ARRAY
```js
const animalPairs = [
	[ 'doe', [ 'buck', 'stag' ] ],
	[ 'ewe', 'ram' ],
	[ 'peahen', 'peacock' ]
];

//To change 'ewe' to 'cow'
animalPairs[1][0] = "cow";

//To access 'buck'
animalPairs[0][1][0];

//Updating a sub-array:
animalPairs[0][1].push('hart');
```
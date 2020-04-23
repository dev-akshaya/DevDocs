### ARRAY CALL BACK METHODS
- Arrays come with many built-in methods that accept callback functions.
- Now that we've covered callbacks, we can learn
these methods!
- SUPER USEFUL!

#### GOALS
- Use the new arrow function syntax
- Understand and use these methods:
- forEach
- map
- filter
- find
- reduce
- some
- every

### FOREACH
- Accepts a callback function.
- Calls the function once per element in the array.
```js
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// Using anonymous function expression:
numbers.forEach(function (num) {
  console.log(num * 2);
})
```

```js
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

function printTriple(n) {
  console.log(n * 3);
}

// Using a pre-defined function:
numbers.forEach(printTriple);
```

```js
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// Using the index:
numbers.forEach(function (num, idx) {
  console.log(idx, num);
});

// O/P:
// 0 20
// 1 21
// 2 22
// 3 23
// 4 24
// 5 25
// 6 26
// 7 27
```

```js
const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
  }
]

// Printing all book titles using forEach:
books.forEach(function (book) {
  console.log(book.title.toUpperCase())
})

// Printing all book titles using for...of:
for (let book of books) {
  console.log(book.title.toUpperCase())
}

// Printing all book titles using for loop:
for (let i = 0; i < books.length; i++) {
  console.log(books[i].title.toUpperCase())
}
```

### MAP
Creates a new array with the results of calling a
callback on every element in the array.
```js
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

const doubles = numbers.map(function (num) {
  return num * 2; //Need to return the value!
});
//[40, 42, 44, 46, 48, 50, 52, 54]

const numDetail = numbers.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0
  }
})
```
```js
const words = ['asap', 'byob', 'rsvp', 'diy'];

const abbrevs = words.map(function (word) {
  return word.toUpperCase().split('').join('.');
})
//["A.S.A.P", "B.Y.O.B", "R.S.V.P", "D.I.Y"]
```

```js
const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
  }
]

const titles = books.map(function (b) {
  return b.title;
})
//["Good Omens", "Bone: The Complete Edition", "American Gods", "A Gentleman in Moscow"]
```

### ARROW FUNCTIONS 
"syntactically compact alternative" to a regular function expression
```js
//Non-arrow function expression:
// const square = function (x) {
//   return x * x;
// }

// Equivalent arrow function:
const square = (x) => {
  return x * x;
}

//parens are option when you have 1 parameter
const isEven = num => {
  return num % 2 === 0;
}

//Must include parens for multiple parameters
const multiply = (x, y) => {
  return x * y;
}

// Must include parens for zero parameters
const greet = () => {
  console.log("HI!")
}
```

### IMPLICIT RETURN
You don't have to write "return" keyword.
```js
// "Regular" arrow function:
const square = n => {
  return n * n;
}
square(4);

// Implicit Return, on multiple lines using parens
const square1 = n => (
  n * n
)
square1(4);

// Implicit return one-liner:
const square2 = n => n * n;
square2(4);
```

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// ALL THREE VERSIONS GIVE US THE SAME RESULT:
const doubles1 = nums.map(function (n) {
  return n * 2;
})

const doubles2 = nums.map(n => {
  return n * 2;
})

const doubles3 = nums.map(n => n * 2);


const parityList = nums.map(function (n) {
  if (n % 2 === 0) return 'even';
  return 'odd';
})

const parityList1 = nums.map((n) => {
  if (n % 2 === 0) return 'even';
  return 'odd';
});
const parityList2 = nums.map((n) => (
  n % 2 === 0 ? 'even' : 'odd'
));

const parityList3 = nums.map((n) => n % 2 === 0 ? 'even' : 'odd');
```

### FIND
returns the value of the first element in the array that satisfies the provided testing function.
```js
let movies = [
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds"
]

// Find first movie that includes 'Mrs' in its title:
const movie = movies.find(movie => {
  return movie.includes('Mrs');
})

//Find first movie that begins with 'Mrs':
const movie2 = movies.find(m => m.indexOf("Mrs") === 0);
```

```js
const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
  }
]
//Find first book w/ rating over 4.3
const goodBook = books.find(b => b.rating >= 4.3);

//Find first book with Neil Gaiman as an author:
const neilBook = books.find(b => (
  b.authors.includes('Neil Gaiman')
));
```

### FILTER
Creates a new array with all elements that pass the test implemented by the provided function.
```js
const nums = [34, 35, 67, 54, 109, 102, 32, 9];

const odds = nums.filter(n => n % 2 === 1);
const evens = nums.filter(n => n % 2 === 0);
const bigNums = nums.filter(n => n > 50);
```

```js
const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]


//All books rated over 4.3:
const goodBooks = books.filter(b => b.rating > 4.3);

// All books with fantasy as a genre:
const fantasyBooks = books.filter(book => (
  book.genres.includes('fantasy')
))

// all books that are either short stories or essays:
const shortForm = books.filter(book => (
  book.genres.includes('short stories') || book.genres.includes('essays')
))

// Simple search functionality:
const query = 'The';
const results = books.filter(book => {
  const title = book.title.toLowerCase();
  return title.includes(query.toLowerCase())
})
```
### EVERY & SOME
- Tests whether all elements in the array pass the provided function. It returns a Boolean value.
- Similar to every, but returns true if ANY of the array elements pass the test function

```js
const words = ["dog", 'dig', 'log', 'bag', 'wag'];

//Is every word 3 characters long?
const all3Letters = words.every(word => word.length === 3);

// Do all words end in 'g'?
const allEndInG = words.every(word => {
  const last = word.length - 1;
  return word[last] === 'g'
});

//Does at least 1 book start with 'd'?
const someStartWithD = words.some(word => word[0] === 'd');

// Do all words start with 'd'?
const allStartWithD = words.every(word => word[0] === 'd');
```

```js
const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]
//Are all books rated 3.5 or higher?
const allGoodBooks = books.every(book => book.rating > 3.5);

//Do any books have 2 authors?
const any2Authors = books.some(book => book.authors.length === 2);
```

### SORT
arr.sort(compareFunc(a,b))
- If compareFunc(a,b) returns less than 0
  - Sort a before b
- If compareFunc(a,b) returns 0
  - Leave a and b unchanged with respect to
each other
- If compareFunc(a,b) returns greater than 0
  - Sort b before a

```js
const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];
// REMEMBER THAT SORT() MUTATES THE ORIGINAL ARRAY!
// I'm using slice() to create a new copy, otherwise we would be sorting the same array 3 times:

// Default string sort :( 
const badSort = prices.slice().sort();

// Ascending Sort:
const ascSort = prices.slice().sort((a, b) => a - b);

// Descending Sort:
const descSort = prices.slice().sort((a, b) => b - a);
```

```js
const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]

// Sorting books by their rating:
books.sort((a, b) => b.rating - a.rating)
```

### REDUCE
Executes a reducer function on each element of the array, resulting in a single value.

```js
const nums = [3, 4, 5, 6, 7];
// To multiply all values in nums:

const product = nums.reduce((total, currentVal) => {
  return total * currentVal;
});

// total    currentVal    returnVal
// 3             4           12
// 12            5           60
// 60            6           360
// 360           7           2520

//Final Return Value: 2520
```

```js
const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

// One approach to find max using reduce:
// const maxGrade = grades.reduce((max, currVal) => {
//   if (currVal > max) return currVal;
//   return max;
// });

// A shorter version using Math.max:
const maxGrade = grades.reduce((max, currVal) => {
  return Math.max(max, currVal)
});
// Finding the min value using Math.min: 
const minGrade = grades.reduce((min, currVal) => (
  //using implicit return for variety's sake
  Math.min(min, currVal)
));

// max     currVal    return
// 87        64         87
// 87        96         96
// 96        92         96
/// etc.

// We can specify an initial value as the 2nd argument to reduce:
// arr.reduce(reducerFunction, initialValue)
const total = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
  return sum + currVal;
}, 1000) //sum starts at 1000, then each element is added to it
```

```js
const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

// To tally the votes:
// const results = votes.reduce((tally, val) => {
//   if (tally[val]) {
//     tally[val]++
//   } else {
//     tally[val] = 1;
//   }
//   return tally;
// }, {})

// The shorter version:
const results = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
}, {});
```

```js
const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'A Truly Horrible Book',
    authors: ['Xavier Time'],
    rating: 2.18,
    genres: ['fiction', 'garbage']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]
// To group books by rating: 
const groupedByRatings = books.reduce((groupedBooks, book) => {
  const key = Math.floor(book.rating);
  if (!groupedBooks[key]) groupedBooks[key] = [];
  groupedBooks[key].push(book)
  return groupedBooks;
}, {})
```
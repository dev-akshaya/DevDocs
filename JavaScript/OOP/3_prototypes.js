// Constructor
function Book(title, author, year){
  this.title = title;
  this.author = author;
  this.year = year;
}

// Get Summary
Book.prototype.getSummary = function(){
  return `This ${this.title} was written by ${this.author} in ${this.year}`;
}

// Get Age
Book.prototype.getAge = function(){
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} old`;
}

// Revise / Change year
Book.prototype.revise = function(newYear){
  this.year = newYear;
  this.revised = true;
}

// Instatiate an Object
const book1 = new Book('Book One', 'Akshaya', '2018');
const book2 = new Book('Book Two', 'Biswal', '2020');

console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());

book1.revise('2020');
console.log(book1);


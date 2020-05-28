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

// Magazine Constructor
function Magazine(title, author, year, month){
  Book.call(this, title, author, year);
  this.month = month;
}
// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype)

// Instantiate Magazine object
const mag1 = new Magazine('Mag One', 'Akshaya', '2018', 'Jan');

console.log(mag1);
console.log(mag1.getSummary());

// Use Magazine Costructor in prototype
Magazine.prototype.constructor = Magazine;
console.log(mag1);
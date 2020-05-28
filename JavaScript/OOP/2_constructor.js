// Constructor
function Book(title, author, year){
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function(){
    return `This ${this.title} was written by ${this.author} in ${this.year}`;
  };
}

// Instatiate an Object
const book1 = new Book('Book One', 'Akshaya', '2020');
const book2 = new Book('Book Two', 'Biswal', '2020');

console.log(book1);
console.log(book1.getSummary());
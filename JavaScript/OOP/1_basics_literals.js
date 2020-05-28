// Strings are Object ------------------------------

// const s1 = 'Hello';
// console.log(typeof s1);

// const s2 = new String("World");
// console.log(typeof s2);

// console.log(window.navigator.appVersion);

// Creating Objects --------------------------------
const book1 = { 
  title: 'Book One',
  author: "AKshaya",
  year: 2020,
  getSummery: function(){
    return `This ${this.title} was written by ${this.author} in ${this.year}`;
  }
}

console.log(book1.getSummery());

// To see all the values of a Object ----------------
console.log(Object.values(book1));


// To see all the keys of a Object ----------------
console.log(Object.keys(book1));
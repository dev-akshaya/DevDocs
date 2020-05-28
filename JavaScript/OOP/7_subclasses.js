class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

  getAge(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} old`;
  }

  revise(newYear){
    this.year = newYear;
    this.revised = true;
  }

  static topBookStore(){
    return "Static Book";
  }
}

// Magazine Sub Class
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

const mag1 = new Magazine('Mag One', 'Akshaya', '2018', 'Jan');

console.log(mag1);
console.log(mag1.getSummary());


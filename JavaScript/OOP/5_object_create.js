// Object Of Protos
const bookProtos = {
  getSummary: function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} old`;
  }
}

// Create Object
const book1 = Object.create(bookProtos);
book1.title = 'Book One';
book1.author = 'Akshaya';
book1.year = '2018';

console.log(book1);

const book2 = Object.create(bookProtos, {
  title: {value: 'Book One'},
  author: {value: 'Akshaya'},
  year: {value: '2018'}
})

console.log(book2);
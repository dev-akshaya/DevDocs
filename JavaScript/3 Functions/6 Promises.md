### Promises
- Promises are used to handle asynchronous operations in JavaScript. They are easy-to—manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.
- A Promise is an object that keep track about whether a certain event has happened already or not.
- Determines what happens after the events has happend. 

- When ever we create a new object using the Promise Constructor then we have to pass a executor function in parameters.

```JS
// Promise Produce 
const objectOne = new Promise( (resolve, reject) => {
  setTimeout( () => {
    let roll_no = [1,2,3,4];
    resolve(roll_no);
    reject('Error While Commuting');
  },2000);
});

const getBioData = (indexdata) => {
  return new Promise((resolve, reject) => {
    setTimeout( (indexdata) => {
      let biodata = {
        name: "Akshaya",
        age: 26
      }
      resolve(`My roll number is ${indexdata} and name ${biodata.name} and age is ${biodata.age}`)
    }, 2000, indexdata);
  })
}

// Promise Consume 
objectOne
.then((rollno) => {
  console.log(rollno);
  return getBioData(rollno[1]);
})
.then((kuchbhi) => {
  console.log(kuchbhi);
})
.catch((error) => {
  console.log(error);
})
```
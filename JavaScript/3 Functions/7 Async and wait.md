### Async and wait
- There's a special syntax to work with promises in a comfortable fashion, called "async/wait". It's surprisingly easy to undersmore tand and use. 
- The word "async" before a function means one simple thing: a function always returns a promise. 
- So the async keyword is added to functions to tell them to return a promise rather than directly returning the value.
- we can use "await" when calling any function that returns a Promise, including web API functions. 
- The keyword "await" makes JavaScript wait until that promise settles and returns its result. 

```JS
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
      resolve(`My roll number is ${indexdata} and name ${biodata.name} and age is ${biodata.age}`);
    }, 2000, indexdata);
  });
};

async function getData(){
  const rollnodata = await objectOne;
  console.log(rollnodata);

  const bioDatas = await getBioData(rollnodata[2]);
  console.log(bioDatas);
  return bioDatas;
}

// Use then to get the resolve value
const getName = getData()
.then( (name) => {
  console.log(name);
});
```
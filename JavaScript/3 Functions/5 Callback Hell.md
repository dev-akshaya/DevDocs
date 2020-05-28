### Callback Hell
- Callbacks are just the name of a convention for using JavaScript functions. There isn't a special thing called a 'callback' in the JavaScript language, it's just a convention. Instead of immediately returning some result like most functions, functions that use callbacks take some time to produce a result. 

- The word 'asynchronous', also 'async' just means 'takes some time' or 'happens in the future, not right now'. Usually callbacks /zare only used when doing I/O, e.g. downloading things, reading files, talking to databases, etc. 

```JS
const getRollNo = () => {
  setTimeout( () => {
    console.log("API getting roll no");
    let roll_no = [1,2,3,4];
    console.log(roll_no);

    setTimeout( (rollno) => {
      const biodata = {
        name: "Akshaya",
        age: 26
      }
      console.log(`My roll number is ${rollno} and name ${biodata.name} and age is ${biodata.age}`);

      setTimeout( (name) => {
        biodata.gender = "male";
          console.log(`My roll number is ${rollno} and name ${biodata.name} and age is ${biodata.age} and gender is ${biodata.gender} `);
      }, 2000, biodata.name)

    }, 2000, roll_no[2]);
  }, 2000);
}

getRollNo();
```
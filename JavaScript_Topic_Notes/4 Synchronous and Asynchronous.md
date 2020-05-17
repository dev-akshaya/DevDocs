### Synchronous and Asynchronous

> Asynchronous
- Asynchronous (AJAX Web-Ap&ation Mo(M) 
- An asynchronous request doesr block the client i.e. browser is rponsive. 
- At that time, user can perform another operations also 
- In such case, javascript engine of the browser is not blocked. 

> Synchronous Example
```JS
const fun1 = () => {
  console.log("Function One is Starting");
  fun2();
  console.log("Function One is Ending");
}

const fun2 = () => {
  console.log("Welcome me, I am Function Two");
}

fun1();

// Function One is Starting
// Welcome me, I am Function Two
// Function One is Ending
```
> Asynchronous Example
```JS
const fun1 = () => {
  console.log("Function One is Starting");
  fun2();
  console.log("Function One is Ending");
}

const fun2 = () => {
  setTimeout( () => { 
    console.log("Welcome me, I am Function Two");
  }, 3000)
}

fun1();

// Function One is Starting
// Function One is Ending
// Welcome me, I am Function Two
```
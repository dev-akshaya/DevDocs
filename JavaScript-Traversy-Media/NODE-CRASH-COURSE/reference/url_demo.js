const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized Url 
// console.log(myUrl.href);
// console.log(myUrl.toString);

// Host (root domain)
// console.log(myUrl.host);

// Hostname
// console.log(myUrl.hostname);

// Path name 
// console.log(myUrl.pathname);

// Serialized query 
// console.log(myUrl.search);

// Params Object
// console.log(myUrl.searchParams);

// Add param 
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${value}: ${name}`));
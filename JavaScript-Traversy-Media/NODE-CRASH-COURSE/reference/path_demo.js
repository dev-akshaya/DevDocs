const path = require('path');


// Base file name 
// console.log(__filename);

// Only file name 
// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));

// File Extension 
// console.log(path.extname(__filename));

// Create Path Object
// console.log(path.parse(__filename));

// Concatenate paths 
console.log(path.join(__dirname, 'test', 'hello.html'));
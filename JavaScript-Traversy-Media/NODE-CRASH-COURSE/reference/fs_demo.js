const fs = require('fs');
const path = require('path');


// Create Folder 
/*
fs.mkdir(path.join(__dirname, '/test'), {}, function(err){
  if(err) throw err;
  console.log('folder created');
})
*/

// Create and Write to File 
/*
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', function(err){
  if(err) throw err;
  console.log('File Written to....');

  fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love node.js', function(err){
    if(err) throw err;
    console.log('File Written to....');
  })
})
*/

// Read File 
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if(err) throw err;
  console.log(data);
})

// File Renamed 
fs.rename(path.join(__dirname, '/test', 'hello.txt'), 
          path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
  if(err) throw err;
  console.log('File Renamed');
})
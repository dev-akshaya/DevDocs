### Block Scope
```JS
// Global Scope ------------------------------
var a = 1;
let b = 2;
const c = 3;

// Function Scope -----------------------------
function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Function Scope: ', a, b, c);
}

test(); 
// Function Scope:  4 5 6

// Block Scope --------------------------------
if(true) {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('If Scope: ', a, b, c);
}
// If Scope:  4 5 6

for(var a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c); 
// Global Scope:  10 2 3
```
### Local & Session Storage
```JS
// set local storage item
localStorage.setItem('name', 'John');
localStorage.setItem('age', '30');
```
```JS
// set session storage item
// deleted once the browser is closed
sessionStorage.setItem('name', 'Beth');
```
```JS
// remove from storage
localStorage.removeItem('name');
```
```JS
// get from storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');
console.log(name, age);
```
```JS
// clear local storage
localStorage.clear();
console.log(name, age);
```

```JS
document.querySelector('form').addEventListener('submit', function(e){
  
  // Get the value from input
  const task = document.getElementById('task').value;

  // Create a array to store multiple tasks
  let tasks;

  // Check the localStorage and Store the values as JSON object
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  // Add the task into array
  tasks.push(task);

  // Convert into strings and set to local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');
  e.preventDefault();
});

// Convert into Array
const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
});
```
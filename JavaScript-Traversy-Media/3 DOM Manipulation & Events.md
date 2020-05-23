## 3 DOM Manipulation & Events

### 1. What Is The DOM
- Document Object Model
- Tree of nodes and elements created by the browser
- JavaScript can be used to read, write and manipulate the DOM
- Object Oriented Representation
---

### 2. Examining The Document Object
```JS
let val;

// Global Document Elements
val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// Form Elements
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

// Link Elements
val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

// Image Elements
val = document.images;

// Script Elements
val = document.scripts;
val = document.scripts[2].getAttribute('src');

// Loop Over all the Script Elements
let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script);
});

console.log(val);
```
---

### 3. DOM Selectors For Single Elements
```JS
// document.getElementById()
console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

// document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));
```

> Example
```JS
const taskTitle = document.getElementById('task-title');

// Change styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
taskTitle.style.display = 'none';

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';
```
---

### 4. DOM Selectors For Multiple Elements
```JS
// document.getElementsByClassName
const items = document.getElementsByClassName('collection-item');

// document.getElementsByTagName
let lis = document.getElementsByTagName('li');
```

> Example
```JS
// Conver HTML Collection into array
let lis = document.getElementsByTagName('li');
lis = Array.from(lis);

lis.reverse();

lis.forEach(function(li, index){
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});

console.log(lis);
```

> Example
```JS
// document.querySelectorAll (Already Stored in Array)
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
}
```
- We can also use multile selector
```JS
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
```
---

### 5. Traversing The DOM

```JS
let val;
const list = document.querySelector('ul.collection'); 
val = list;
```

```JS
// Get child nodes : (Show Text Nodes)
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype
```

```JS
// Get children element nodes : (Hide Text Nodes and Mostly Used)
val = list.children;
val = list.children[1];
```

```JS
// First child
val = list.firstChild;
val = list.firstElementChild;
```

```JS
// Last child
val = list.lastChild;
val = list.lastElementChild;
```

```JS
// Count child elements
val = list.childElementCount;
```

```JS
// Get parent node
val = listItem.parentNode; // Show Text Nodes
val = listItem.parentElement; // Hide Text Nodes
val = listItem.parentElement.parentElement;
```

```JS
// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;
```

```JS
// Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);
```
---

### 6. Creating Elements
```JS
const li  = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);
```
---

### 7. Removing & Replacing Elements
```JS
// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);
```

```JS
// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);
```

```JS
// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(val);
```
---

### 8. Event Listeners & The Event Object
```JS
// Unnamed Event Function
document.querySelector('.clear-tasks').addEventListener('click', function(e){
  console.log('Hello World');

  e.preventDefault();
});
```

```JS
// Named Event Function with our friend (e)
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){

  let val;
  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coords event relative to the (window)
  val = e.clientY;
  val = e.clientX;

  // Coords event relative to the (element)
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}
```
---

### 9. Mouse Events
```JS
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);
// Doubleclick
clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
card.addEventListener('mouseenter', runEvent);
// Mouseleave
card.addEventListener('mouseleave', runEvent);
// Mouseover
card.addEventListener('mouseover', runEvent);
// Mouseout
card.addEventListener('mouseout', runEvent);
// Mousemove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
```
---

### 10. Keyboard & Input Events
```JS
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
taskInput.value = '';

// All the events of input Tag 

// Keydown
taskInput.addEventListener('keydown', runEvent);

// Keyup
taskInput.addEventListener('keyup', runEvent);

// Keypress
taskInput.addEventListener('keypress', runEvent);

// Focus
taskInput.addEventListener('focus', runEvent);

// Blur
taskInput.addEventListener('blur', runEvent);

// Cut
taskInput.addEventListener('cut', runEvent);

// Paste
taskInput.addEventListener('paste', runEvent);

// Input
taskInput.addEventListener('input', runEvent);

// Change - Select List
select.addEventListener('change', runEvent);


function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  heading.innerText = e.target.value;

  e.preventDefault();
}
```
---

### 11. Event Bubbling & Delegation
```JS
// EVENT BUBBLING
document.querySelector('.card-title').addEventListener('click', function(){
  console.log('card title');
});

document.querySelector('.card-content').addEventListener('click', function(){
  console.log('card content');
});

document.querySelector('.card').addEventListener('click', function(){
  console.log('card');
});

document.querySelector('.col').addEventListener('click', function(){
  console.log('col');
});
```
```JS
// EVENT DELGATION: 
/* Instead of targeting the single elements, target the body and pick the required element.
Note: If we target the single element then it will only work once. */

// Single Element :
// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);

// Global Element :
document.body.addEventListener('click', deleteItem);

function deleteItem(e){

  // This will check the entire classList
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete item');
  // }

  // This will only check the given class
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}
```
---

### 12. Local & Session Storage
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


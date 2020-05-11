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

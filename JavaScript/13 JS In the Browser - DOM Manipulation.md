### DOM

WHAT IS IT ?
- The DOM is a JavaScript representation of a webpage .
- It's your JS "window" into the contents of a webpage
- It's just a bunch of objects that you can interact with via JS.

### DOCUMENT
The document object is our entry point into the world of the DOM. It contains representations of all the content on a page, plus tons of useful methods and properties

### SELECTING
- getElementById
- getElementsByTagName
- getElementsByClassName

```JS
// To select the element with id of bear-photo:
document.getElementById('bear-photo')

//To select the element with id of main:
document.getElementById('main')
```

```JS
//To select all li's
document.getElementsByTagName('li');

// To select all h1's (there's only one on this page):
document.getElementsByTagName('h1');

//Remember, getElementsByTagName returns an array-like object (NOT a real array)
const inputs = document.getElementsByTagName('input'); //get all inputs
inputs[0]; //this works
inputs.pop() //DOES NOT WORK! pop() is an array method, and this isn't an array!
```

```JS
// To select all elements with the class of 'special':
document.getElementsByClassName('special');

//getElementsByClassName also returns an array-like object.
// We don't have access to array methods, but we can iterate:

const specials = document.getElementsByClassName('special');
for (let el of specials) {
  console.log(el);
}

//We can use spread to make an actual array:
const arr = [...specials];
arr.pop() //this works because it's now an array!
```

### querySelector
- A newer, all-in-one method to select a single element.
- Pass in a CSS selector

```JS
//To find the first li on the page:
document.querySelector('li');

//To find the first element with class of special:
document.querySelector('.special');

//To find the first element with id of main (there should only be one...)
document.querySelector('#main');

// To find the first li with the class of special, nested inside of a ul, nested inside a section:
document.querySelector('section ul li.special');

// To find ALL li's on the page:
document.querySelectorAll('li');

// To find ALL elements with the class of special on the page:
document.querySelectorAll('.special');
```

### PROPERTIES & METHODS

```JS
classList
getAttribute()
setAttribute()
appendChild()
append()
prepend()
removeChild()
remove()
createElement
```

```JS
innerText
textContent
innerHTML
value
parentElement
children
nextSibling
previousSibling
style
```

### EVENTS
Responding to user inputs and actions !

### A SMALL TASTE
```JS
clicks
drags
drops
hovers
scrolls
form submission
key presses
focus/blur
```

```JS
mouse wheel
double click
copying
pasting
audio start
screen resize
printing
```
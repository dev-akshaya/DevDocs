### Traversing The DOM

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
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
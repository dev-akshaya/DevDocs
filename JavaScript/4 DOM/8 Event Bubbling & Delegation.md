### Event Bubbling & Delegation
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
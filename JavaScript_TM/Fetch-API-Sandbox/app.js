// --------------------------------------------------------
// Fetch Data from Text -----------------------------------
// --------------------------------------------------------

const getTextBtn = document.getElementById('getText');
const output = document.getElementById('output');

getTextBtn.addEventListener('click', getText);

// ES5
/*
function getText() {
  fetch('sample.txt')
    .then(function(res){
      return res.text();
    })
    .then(function(data){
      output.innerHTML = data;
    })
}
*/

// ES6
function getText() {
  fetch('sample.txt')
    .then(res =>  res.text())
    .then(data =>  output.innerHTML = data)
    .catch(error => output.innerHTML = error);
}

// --------------------------------------------------------
// Fetch Data from JSON -----------------------------------
// --------------------------------------------------------

const getUsersBtn = document.getElementById('getUsers');

getUsersBtn.addEventListener('click', getUsers);

function getUsers(){
  fetch('users.json')
  .then(res => res.json())
  .then(data => {
    // console.log(data);
    let userOutput = '<h2>Users</h2>';
    data.forEach(function(user){
      userOutput += `
      <ul class="list-group mb-4">
        <li class="list-group-item">ID: ${user.id}</li>
        <li class="list-group-item">Name: ${user.name}</li>
        <li class="list-group-item">Email: ${user.email}</li>
      </ul>`;
    });
    output.innerHTML = userOutput;
  });
}

// --------------------------------------------------------
// Fetch Data from API ------------------------------------
// --------------------------------------------------------

const getPostsBtn = document.getElementById('getPosts');

getPostsBtn.addEventListener('click', getPosts);

function getPosts(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => {
    // console.log(data);
    let postOutput = '<h2>Posts</h2>';
    data.forEach(function(post){
      postOutput += `
      <div class="card card-body mb-3">
        <b>ID: ${post.id}</b>
        <h4>Name: ${post.title}</h4>
        <p>Email: ${post.body}</p>
      </div>`;
    });
    output.innerHTML = postOutput;
  });
}

// --------------------------------------------------------
// Add Post -----------------------------------------------
// --------------------------------------------------------

const addPostForm = document.getElementById('addPost');

addPostForm.addEventListener('submit', addPost);

function addPost(e){
  e.preventDefault();

  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;

  // console.log(title, body);
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body:JSON.stringify({titile:title, body:body})
  })
  .then(res => res.json())
  .then(data => console.log(data))
}
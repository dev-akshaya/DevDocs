outputArea = document.getElementById('outputArea');

const posts = [
  {title: 'Post One', body: 'This is Post One'},
  {title: 'Post Two', body: 'This is Post Two'}
];

function getPosts(){
  setTimeout( () => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${index} : ${post.title}</li>`
    });
    outputArea.innerHTML = output;
  },1000);
}

function createPost(post){
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      posts.push(post);

      const error = false;

      if(!error){
        resolve();
      }else {
        reject('Error: Something Went Wrong');
      }
    }, 2000);
  })
}

// Async await
async function init(){
  await createPost({title: 'Post Three', body: 'This is Post Three'});

  getPosts();
}

init();

// Async await with fetch
async function fetchUsers(){
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await res.json();

  console.log(data);
}

fetchUsers();
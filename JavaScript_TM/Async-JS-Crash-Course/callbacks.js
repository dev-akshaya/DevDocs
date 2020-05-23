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

function createPost(post, callback){
  setTimeout( () => {
    posts.push(post);
    callback();
  }, 2000);
}

// getPosts();

createPost({title: 'Post Three', body: 'This is Post Three'}, getPosts);
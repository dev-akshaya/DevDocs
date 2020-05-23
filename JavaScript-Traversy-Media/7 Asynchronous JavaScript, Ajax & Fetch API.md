## 7. Asynchronous JavaScript, Ajax & Fetch API

### 1. What Is Asynchronous Programming
> Most Async code you work with will be a part of api or library
- XMLHttpRequest & Fetch
- JQuery Ajax, Axios, Other HTTP Libraries
- Node.js fs(file system) module

> There are few ways to work with Async code
- Callbacks
- Promises
- Async/Await
---

### 2. Ajax & XHR Introduction
> What is AJAX ?
- Asynchronous JavaScript and XML
- Set of web technologies
- Send and Receive data asynchronous
- Does not interfere with the current page
- JSON has replaced XML for the most part
- Make Async request in the background
- No page load/refresh
- Fetch Data
- Very Interactive

> XHR Object ?
- XmlHttpRequest
- API in the form of object
- Provided by the browsers JS environment
- Methods transfer data between client/server
- Can be used with other protocols than HTTP
- Can work with data other than XML(JSON, Plain Text)

> Libraries and Other methods
- Fetch API
- Axios
- Superagent
- JQuery
- Node HTTP
---

### 3. XHR Object Methods & Working With Text

> readyState Values
- 0: request not initialized 
- 1: server connection established
- 2: request received 
- 3: processing request 
- 4: request finished and response is ready

> HTTP Statuses
- 200: "OK"
- 403: "Forbidden"
- 404: "Not Found"

```HTML
<div class="container">
  <button id="button">Get Data</button>
  <div id="output"></div>
</div>
```

> Understand Code
```JS
document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'data.txt', true);

  // Ready State Check
  // console.log('READYSTATE', xhr.readyState);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState);
  }

  xhr.onload = function(){

    // Ready State Check
    // console.log('READYSTATE', xhr.readyState);

    if(this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  // Old Method of Status and Ready State Check
  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4){
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function() {
    console.log('Request error...');
  }

  xhr.send();
}
```

> Code Clean
```JS
document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'data.txt', true);

  xhr.onload = function(){
    if(this.status === 200) {
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  xhr.onerror = function() {
    console.log('Request error...');
  }

  xhr.send();
}
```

### 4. Working With Ajax & JSON
```HTML
<div class="container">
  <button id="button1">Get Customer</button>
  <button id="button2">Get Customers</button>
  <h1>Customer</h1>  
  <div id="customer"></div>
  <h1>Customers</h1>  
  <div id="customers"></div>
</div>
```

> JSON
```JSON
{
  "id": 1,
  "name": "John Doe",
  "company": "123 Designs",
  "phone": "444-555-6666"
}
```

> Load Single Customer
```JS
document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function(){
    if(this.status === 200) {
      // console.log(this.responseText);

      const customer = JSON.parse(this.responseText);

      const output = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;

      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr.send();
}
```

> JSON
```JSON
[
  {
    "id": 1,
    "name": "John Doe",
    "company": "123 Designs",
    "phone": "444-555-6666"
  },
  {
    "id": 2,
    "name": "Steve Smith",
    "company": "Hello Productions",
    "phone": "333-222-2222"
  },
  {
    "id": 3,
    "name": "Tara Williams",
    "company": "Traversy Media",
    "phone": "111-222-3333"
  }
]
```

> Load Multiple Customer
```JS
// Load Customers
function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function(){
    if(this.status === 200) {
      // console.log(this.responseText);

      const customers = JSON.parse(this.responseText);

      let output = '';

      customers.forEach(function(customer){
        output += `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;
      });

      document.getElementById('customers').innerHTML = output;
    }
  }

  xhr.send();
}
```

### 5. Data From an External API - Chuck Norris Project
```HTML
<div class="container">
  <h2>Chuck Norris Joke Generator</h2>
  <form>
    <div>
      <label for="number">Number of jokes</label>
      <input type="number" id="number">
    </div>
    <div>
      <button class="get-jokes">Get Jokes</button>
    </div>
  </form>
  <ul class="jokes"></ul>
</div>
```

```JS
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      
      let output = '';

      if(response.type === 'success') {
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += '<li>Something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();

  e.preventDefault();
}
```

### 6. REST APIs & HTTP Requests
> What is an API?
- Application Programming Interface
- Contact Provided by One piece of software to another
- Structured request and responce
- We just worked with an API that takes a request and responce with jokes 

> REST APIS
- Representational State Transfer
- Architecture style for designing networked application
- Relies on a stateless, client-server protocol, almost always http
- Treats server objects as resources that can be created or destroyed
- Can be used by virtually any programming language
- All APIS have their own rules and structure

> HTTP Requests
- GET : Retrive data from a specified source
- POST : Submit data to be processed to a specified source
- PUT : Update a specified source
- DELETE : Delete a specified source
> 
- HEAD : Same as get but doesn't return a body
- OPTIONS : Returns the supported HTTP methods
- PATCH : Update partial resources

### 7. Callback Functions
> Synchronous Way
```JS
const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

// Server takes 2sec to create a post and 1sec to get display the post

function createPost(post) {
  setTimeout(function() {
    posts.push(post);
  }, 2000);
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'});

getPosts();

// The output will be:
// Post One
// Post Two
```

> Asynchronous Way
```JS
// Here, we have used callback
function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 2000);
}


function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);

// The output will be:
// Post One
// Post Two
// Post Three
```

### 8, 9. Custom HTTP Library (Ajax With Callbacks)

- easyhttp.js

> Make an Object
```JS
function easyHTTP() {
  this.http = new XMLHttpRequest();
}
```

> Make an HTTP GET Request
```JS
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }  

  this.http.send();
}
```
> Make an HTTP POST Request
```JS
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}
```

> Make an HTTP PUT Request
```JS
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}
```

> Make an HTTP DELETE Request
```JS
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, 'Post Deleted');
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}
```

- app.js

>
```JS
const http = new easyHTTP;

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
  if(err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

// Get Single Post
http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
  if(err) {
    console.log(err);
  } else {
    console.log(post);
  }
});
```

> Create Data with Create Post and Update Post
```JS
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
  if(err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post) {
  if(err) {
    console.log(err);
  } else {
    console.log(post);
  }
});
```

> Delete Post
```JS
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  if(err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
```

### 10 ES6 Promises
```JS
const posts = [
  {title: 'Post One', body:'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

function createPost(post) {
  return new Promise(function(resolve, reject){
    setTimeout(function() {
      posts.push(post);

      const error = false;

      if(!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'})
.then(getPosts)
.catch(function(err) {
  console.log(err);
});
```
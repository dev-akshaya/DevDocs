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
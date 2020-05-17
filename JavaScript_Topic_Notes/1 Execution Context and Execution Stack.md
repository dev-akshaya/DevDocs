### Execution Context and Execution Stack 

> Execution Context
- JavaScript engine creates the global execution context before it starts to execute any code. 
- Variables, and function that is not inside any function. A new execution context gets created every time a function is executed. 
- The global execution context just like any other execution context, except that it gets created by default. It is associated with Global Object. Which means a window object
- Ex. this === window, name = = window.name 

> Execution Stack / Calling Stack
- Execution stack, also known as "calling stack" is a stack with a LIFO (Last in, First out) structure, which is used to store all the execution context created during the code execution. 
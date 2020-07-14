### setState

- Asynchronous process
- Here, after increment the count has to be 1 but in console we will see less then one from the present value

```JSX
import React, { Component } from "react";

class Count extends Component {
  state = { count: 0 };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count); // 0
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.handleIncrement()}>Increment</button>
      </div>
    );
  }
}

export default Count;
```

- setState can take to parameter one to set change the state and another as a call back function.

```JSX
import React, { Component } from "react";

class Count extends Component {
  state = { count: 0 };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log("Callback Function:", this.state.count); // 1
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.handleIncrement()}>Increment</button>
      </div>
    );
  }
}

export default Count;
```

- When we want to update the state based on the previous state then its better to pass a function instead of object, the function can be used to calculate the previous state.
- you can also pass props with the function, if its required.

```JSX
import React, { Component } from "react";

class Count extends Component {
  state = { count: 0 };

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleIncrementFive = () => {
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.handleIncrement()}>Increment</button>
        <button onClick={() => this.handleIncrementFive()}>Increment 5</button>
      </div>
    );
  }
}

export default Count;
```

### Notes: setState

- Always make use of setState and never modify the state directly.
- Code has to be executed after the state has been updated ? Place that code in the call back function which is the second argument to the setState method.
- When you have to update state based on the previous state value, pass in a function as an argument Instead of the regular object.

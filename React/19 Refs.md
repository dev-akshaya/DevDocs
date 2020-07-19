## Refs

- here, we want to make an input auto-focus on page reload.
- we can create this refs by 3 methods, let check them one by one.

### 1. React.createRef()

```JSX
import React, { Component } from "react";

class RefsDemo extends Component {
  constructor() {
    super();
    this.state = {};
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default RefsDemo;
```

### Callback Ref

```JSX
import React, { Component } from "react";

class RefsDemo extends Component {
  constructor() {
    super();
    this.state = {};

    // Create a property
    this.cbRef = null;
    // Create a method that assign the above proprty to a DOM element
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default RefsDemo;
```

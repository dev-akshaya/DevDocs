## Refs with Class Components

- we can also use refs in class components, in the last chapter we saw how we can use a ref with normal HTML elements.
- here, we are passing a ref in parent component and it will call its chield component method.

```JSX
// Input.jsx: Child Component
import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default Input;
```

```JSX
// Parentinput.jsx: Parent Element
import React, { Component } from "react";
import Input from "./Input";

class Parentinput extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  clickHandler = () => {
    this.componentRef.current.focusInput();
  };

  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus</button>
      </div>
    );
  }
}

export default Parentinput;
```

```JSX
// Main App
import React from "react";
import "./App.css";
import Parentinput from "./components/Parentinput";

function App() {
  return (
    <div className="App">
      <Parentinput />
    </div>
  );
}

export default App;
```

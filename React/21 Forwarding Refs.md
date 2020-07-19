## Forwarding Refs

- its have the same functionality that we saw in the last section
- here, we are passing a ref from parent to its native child using forwarding Refs

```JSX
// Input.jsx: Child Element
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

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
    this.componentRef.current.focus();
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

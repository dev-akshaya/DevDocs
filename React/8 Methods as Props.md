## Methods as Props

- child components can communicate with parent components with the help of props.
- Interesting right! here, parent component pass the method/fuction as props to child and child component use this as a props.

```JSX
// Child Component
import React from "react";

const ChildComponent = (props) => {
  console.log(props);
  return <button onClick={props.greetProps}>Greet Parent</button>;
};

export default ChildComponent;
```

```JSX
// Parent Component
import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  state = { parentName: "Parent" };

  greetFunction = () => {
    alert(`Hello ${this.state.parentName}`);
  };

  render() {
    return (
      <div>
        <ChildComponent greetProps={this.greetFunction} />
      </div>
    );
  }
}

export default ParentComponent;
```

### Pass a parameter from child to parent element to communicate

```JSX
// Child Component
import React from "react";

const ChildComponent = (props) => {
  console.log(props);
  return <button onClick={props.greetProps}>Greet Parent</button>;
};

export default ChildComponent;
```

```JSX
import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  state = { parentName: "Parent" };

  greetFunction = (child) => {
    alert(`Hello ${this.state.parentName} from ${child}`);
  };

  render() {
    return (
      <div>
        <ChildComponent
          greetProps={() => this.greetFunction("Akshaya-Child")}
        />
      </div>
    );
  }
}

export default ParentComponent;
```

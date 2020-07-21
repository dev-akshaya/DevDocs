## Higher Order Components

- To share common functionalty between components
- A pattern where a function takes a component as an argument and returns a new component.

```JSX
const NewComponent = higherOrderComponentl (originolComponent)

const EnhoncedComponent = higherOrderComponent(originolComponent)

const IronMon = withSuit(TonyStork)
```

```JSX
// sharedHOC.jsx
import React from "react";

const UpdatedComponent = (OrignalComponent) => {
  class NewComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      return (
        <OrignalComponent
          name="Akshaya"
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
```

Note:

- Here we are sharing a single state with different components but there component states are different and not effecting each other
- from HOC we can pass strings as props, state as props and methods as props

```JSX
// HocComponentOne.jsx
import React, { Component } from "react";
import UpdatedComponent from "./sharedHOC";

class HocComponentOne extends Component {
  render() {
    const { name, count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          {name} Clicked this {count} times
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(HocComponentOne);
```

```JSX
// HocComponentTwo.jsx
import React, { Component } from "react";
import UpdatedComponent from "./sharedHOC";

class HocComponentTwo extends Component {
  render() {
    const { name, count, incrementCount } = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementCount}>
          {name} hovered over {count} times
        </h1>
      </div>
    );
  }
}

export default UpdatedComponent(HocComponentTwo);
```

```JSX
// App.js
import React from "react";
import "./App.css";
import HocComponentOne from "./components/HocComponentOne";
import HocComponentTwo from "./components/HocComponentTwo";

function App() {
  return (
    <div className="App">
      <HocComponentTwo />
      <HocComponentOne />
    </div>
  );
}

export default App;
```

## Render Props

- The term "render props" refers to a technique for sharing code between React components using a prop whose value is a function.

> An example of function prop

```JSX
// App.js
import React from "react";
import "./App.css";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <User render={(isLoggedIn) => (isLoggedIn ? "Akshaya" : "Guest")} />
    </div>
  );
}

export default App;
```

```JSX
// User.jsx
import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.render(1)}</h1>
        <h1>Biswal</h1>
      </div>
    );
  }
}

export default User;
```

### Render Prop example

here, lets consider we have two components both have same functionaly that on-mouse-over its value increment by 1.

```JSX
// Counter.jsx
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

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
      <div>{this.props.render(this.state.count, this.incrementCount)}</div>
    );
  }
}

export default Counter;
```

```JSX
// HoverCounter.jsx
import React, { Component } from "react";

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementCount}>Hover Over {count} Times</h1>
      </div>
    );
  }
}

export default HoverCounter;
```

```JSX
// ClickCounter.jsx
import React, { Component } from "react";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Clicked {count} times</button>
      </div>
    );
  }
}

export default ClickCounter;
```

```JSX
// App.js
import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

function App() {
  return (
    <div className="App">
      <Counter
        render={(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />
    </div>
  );
}

export default App;
```

### Render Props as children

> Goto Counter.jsx and change this line

```JSX
render() {
    return (
      <div>{this.props.children(this.state.count, this.incrementCount)}</div>
    );
  }
```

> Goto App.js and change this line

```JSX
<Counter>
  {(count, incrementCount) => (
    <HoverCounter count={count} incrementCount={incrementCount} />
  )}
</Counter>

<Counter>
  {(count, incrementCount) => (
    <ClickCounter count={count} incrementCount={incrementCount} />
  )}
</Counter>
```

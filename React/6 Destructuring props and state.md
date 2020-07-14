### props

- Destructuring improves code readability

> Before Destructuring

```JSX
import React from "react";

const Greet = (props) => {
  return (
    <div>
      <h2>Hello {props.name}</h2>
      <h3>{props.heroname}</h3>
    </div>
  );
};

export default Greet;
```

> After Destructuring

```JSX
import React from "react";

const Greet = ({name, heroname}) => {
  return (
    <div>
      <h2>Hello {name}</h2>
      <h3>{heroname}</h3>
    </div>
  );
};

export default Greet;
```

> After Destructuring

```JSX
import React from "react";

const Greet = (props) => {
  const { name, heroname } = props;
  return (
    <div>
      <h2>Hello {name}</h2>
      <h3>{heroname}</h3>
    </div>
  );
};

export default Greet;
```

```JSX
// App.js
<Greet />
```

### class

```JSX
import React, { Component } from "react";

class Greet extends Component {
  state = { message: "Good Morning" };
  handleMessage = () => {
    this.setState({
      message: "Good Night",
    });
  };
  render() {
    // Destructuring of State
    const { message } = this.state;

    // Destructuring of props
    const { name, love } = this.props;
    return (
      <div>
        <h1>{message}</h1>
        <button onClick={() => this.handleMessage()}>Click me at Night</button>
        <h1>Your name: {name}</h1>
        <h1>Your love: {love}</h1>
      </div>
    );
  }
}

export default Greet;
```

```JSX
// App.js
<Greet name="Akshaya" love="Coding" />
```

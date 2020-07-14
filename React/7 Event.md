## Simple Events

### Event in function

```JSX
import React from "react";

const Event = () => {
  const clickHandle = () => {
    console.log("Cliked");
  };

  return (
    <div>
      <button onClick={clickHandle}>Click Event</button>
    </div>
  );
};

export default Event;
```

### Event in class

```JSX
import React, { Component } from "react";

class Event extends Component {
  clickHandler = () => {
    console.log("Cliked");
  };

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Event</button>
      </div>
    );
  }
}

export default Event;
```

## Binding Event Handlers

There are 4 different ways to handle events

### Method 1

```JSX
import React, { Component } from "react";

class Event extends Component {
  state = { message: "Event" };

  clickHandler() {
    this.setState({ message: "Event Bind" });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.clickHandler.bind(this)}>click me</button>
      </div>
    );
  }
}

export default Event;
```

### Method 2

```JSX
import React, { Component } from "react";

class Event extends Component {
  state = { message: "Event" };

  clickHandler() {
    this.setState({ message: "Event Bind" });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.clickHandler()}>click me</button>
      </div>
    );
  }
}

export default Event;
```

### Method 3

```JSX
import React, { Component } from "react";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "Event" };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler () {
    this.setState({ message: "Event Bind" });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.clickHandler}>click me</button>
      </div>
    );
  }
}

export default Event;
```

### Method 4

```JSX
import React, { Component } from "react";

class Event extends Component {
  state = { message: "Event" };

  clickHandler = () => {
    this.setState({ message: "Event Bind" });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.clickHandler}>click me</button>
      </div>
    );
  }
}

export default Event;
```

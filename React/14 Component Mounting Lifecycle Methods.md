## Order of execution during component mount phase:

```JSX
import React, { Component } from "react";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "Akshaya" };
    console.log(" ----- LifecycleA constructor ----- ");
  }

  static getDerivedStateFromProps(props, state) {
    console.log(" ----- LifecycleA getDerivedStateFromProps ----- ");
    return null;
  }

  componentDidMount() {
    console.log(" ----- LifeCycleA componentDidMount ----- ");
  }

  render() {
    console.log(" ----- LifecycleA render ----- ");
    return <div></div>;
  }
}

export default LifecycleA;
```

> Output

1. ----- LifecycleA constructor -----
2. ----- LifecycleA getDerivedStateFromProps -----
3. ----- LifecycleA render -----
4. ----- LifeCycleA componentDidMount -----

## Order of execution during component mount phase with Clidren:

```JSX
// LifecycleB -------------------------
import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "Akshaya" };
    console.log(" ----- LifecycleB constructor ----- ");
  }

  static getDerivedStateFromProps(props, state) {
    console.log(" ----- LifecycleB getDerivedStateFromProps ----- ");
    return null;
  }

  componentDidMount() {
    console.log(" ----- LifeCycleB componentDidMount ----- ");
  }

  render() {
    console.log(" ----- LifecycleB render ----- ");
    return <div></div>;
  }
}

export default LifecycleB;
```

```JSX
// LifecycleA -------------------------
import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "Akshaya" };
    console.log(" ----- LifecycleA constructor ----- ");
  }

  static getDerivedStateFromProps(props, state) {
    console.log(" ----- LifecycleA getDerivedStateFromProps ----- ");
    return null;
  }

  componentDidMount() {
    console.log(" ----- LifeCycleA componentDidMount ----- ");
  }

  render() {
    console.log(" ----- LifecycleA render ----- ");
    return (
      <div>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
```

> Output

1. ----- LifecycleA constructor -----
2. ----- LifecycleA getDerivedStateFromProps -----
3. ----- LifecycleA render -----
4. ----- LifecycleB constructor -----
5. ----- LifecycleB getDerivedStateFromProps -----
6. ----- LifecycleB render -----
7. ----- LifeCycleB componentDidMount -----
8. ----- LifeCycleA componentDidMount -----

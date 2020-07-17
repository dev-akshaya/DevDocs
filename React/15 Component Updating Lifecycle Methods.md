## Component update has three more methods:

- shouldComponentUpdate
- getSnapshotBeforeUpdate
- componentDidUpdate

To update the component we have to updated the state of a component

```JSX
  changeState = () => {
    this.setState({ name: "Dev Akshaya" });
  };
```

### LifecycleA

```JSX
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

  shouldComponentUpdate() {
    console.log(" ----- LifeCycleA shouldComponentUpdate ----- ");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(" ----- LifeCycleA getSnapshotBeforeUpdate ----- ");
    return null;
  }

  componentDidUpdate() {
    console.log(" ----- LifeCycleA componentDidUpdate ----- ");
  }

  changeState = () => {
    this.setState({ name: "Dev Akshaya" });
  };

  render() {
    console.log(" ----- LifecycleA render ----- ");
    return (
      <div>
        <h1>LifecycleA</h1>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
```

### LifecycleB

```JSX
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

  shouldComponentUpdate() {
    console.log(" ----- LifeCycleB shouldComponentUpdate ----- ");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(" ----- LifeCycleB getSnapshotBeforeUpdate ----- ");
    return null;
  }

  componentDidUpdate() {
    console.log(" ----- LifeCycleB componentDidUpdate ----- ");
  }

  render() {
    console.log(" ----- LifecycleB render ----- ");
    return (
      <div>
        <h1>LifecycleB</h1>
      </div>
    );
  }
}

export default LifecycleB;
```

1.  ----- LifecycleA getDerivedStateFromProps -----
2.  ----- LifeCycleA shouldComponentUpdate -----
3.  ----- LifecycleA render -----
4.  ----- LifecycleB getDerivedStateFromProps -----
5.  ----- LifeCycleB shouldComponentUpdate -----
6.  ----- LifecycleB render -----
7.  ----- LifeCycleB getSnapshotBeforeUpdate -----
8.  ----- LifeCycleA getSnapshotBeforeUpdate -----
9.  ----- LifeCycleB componentDidUpdate -----
10. ----- LifeCycleA componentDidUpdate -----

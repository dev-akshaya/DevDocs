> PureComp.jsx

```JSX
import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  state = {};
  render() {
    console.log(" ---------- Pure Component Render ---------- ");
    return <div>Pure Component {this.props.name}</div>;
  }
}

export default PureComp;

// impc
// ccp
```

> RegComp.jsx

```JSX
import React, { Component } from "react";

class RegComp extends Component {
  state = {};
  render() {
    console.log(" ---------- Regular Component Render ---------- ");
    return <div>Regular Component {this.props.name} </div>;
  }
}

export default RegComp;
```

> ParentComp.jsx

```JSX
import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

class ParentComp extends Component {
  state = { name: "Akshaya" };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Akshaya",
      });
    }, 2000);
  }

  render() {
    console.log(" ---------- Parent Component Render ---------- ");
    return (
      <div>
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
```

> Output will be :

1.  ---------- Parent Component Render ----------
2.  ---------- Regular Component Render ----------
3.  ---------- Pure Component Render ----------

repeated code:

1.  ---------- Parent Component Render ----------
2.  ---------- Regular Component Render ----------

Note :

- Here, the pure component will not render as the input values/ input props are not changing.
- This can increase the performance little bit

RegComp vs. PureComp :

- A regular component does not implement the shouldComponentUpdate method. it always return true by default.
- A pure component on the other hand implements shouldComponetUpdate with a shallow props and state comparsion.
- But, it always better to use regular component in most of the times, unless you saw a performance issue in that component.

Note:

if we change the parent component to pure component then its children components will also behave like pure component.

```JSX
import React, { PureComponent } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

class ParentComp extends PureComponent {
  state = { name: "Akshaya" };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Akshaya",
      });
    }, 2000);
  }

  render() {
    console.log(" ---------- Parent Component Render ---------- ");
    return (
      <div>
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
```

> Output will be :

1.  ---------- Parent Component Render ----------
2.  ---------- Regular Component Render ----------
3.  ---------- Pure Component Render ----------

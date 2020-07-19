### Memo Component

- Pure components only work with Class base components so to add the same functionality in function base components, we have memo components.

- Let's see an example:

> MemoComp.jsx

```JSX
import React from "react";

const MemoComp = ({ name }) => {
  console.log(" ---------- Memo Component ---------- ");
  return <div>{name}</div>;
};

export default React.memo(MemoComp);
```

> ParentComp.jsx

```JSX
import React, { Component } from "react";
import MemoComp from "./MenoComp";

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
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
```

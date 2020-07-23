## Context

Context Provides a way to pass data through the component tree without having to pass props down manually at every level

> Components

```JSX
// ComponentC.jsx
import React, { Component } from "react";
import ComponentE from "./ComponentE";

class ComponentC extends Component {
  render() {
    return (
      <div>
        <ComponentE />
      </div>
    );
  }
}

export default ComponentC;
```

```JSX
// ComponentE.jsx
import React, { Component } from "react";
import ComponentF from "./ComponentF";

class ComponentE extends Component {
  render() {
    return (
      <div>
        <ComponentF />
      </div>
    );
  }
}

export default ComponentE;
```

> Steps

### Create the context

```JSX
// userContext.jsx
import React from "react";

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
```

### Provide a context value

```JSX
// App.js
import React from "react";
import "./App.css";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="Akshaya">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
```

### Consume the context value

```JSX
// ComponentF.jsx
import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class ComponentF extends Component {
  render() {
    return (
      <div>
        <h1>
          <UserConsumer>
            {(username) => {
              return <div>Hello {username}</div>;
            }}
          </UserConsumer>
        </h1>
      </div>
    );
  }
}

export default ComponentF;
```

## Set Default Context Value

```JSX
// userContext.jsx
import React from "react";

const UserContext = React.createContext("Dev-Akshaya");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
```

```JSX
// App.js
import React from "react";
import "./App.css";
import ComponentC from "./components/ComponentC";

function App() {
  return (
    <div className="App">
      <ComponentC />
    </div>
  );
}

export default App;
```

- Here, the output will be "Dev-Akshaya"

## Context Type

> Use the context in ComponentE

```JSX
// userContext.jsx
import React from "react";

const UserContext = React.createContext("Dev-Akshaya");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
```

```JSX
// ComponentE.jsx
import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContext";

class ComponentE extends Component {
  render() {
    return (
      <div>
        <h2>ComponentE context {this.context}</h2>
        <ComponentF />
      </div>
    );
  }
}

ComponentE.contextType = UserContext;

export default ComponentE;
```

output will be :
ComponentE context Dev-Akshaya
Hellos Dev-Akshaya

> Another Way to use context in ComponentE

- here, is a drawback of using static is that, we can only use only one context so to use multiple context we have to choose the above method

```JSX
// ComponentE.jsx
import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContext";

class ComponentE extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div>
        <h2>ComponentE context {this.context}</h2>
        <ComponentF />
      </div>
    );
  }
}

export default ComponentE;
```

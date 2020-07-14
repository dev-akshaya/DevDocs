## Conditional Rendering in JSX

### If Else

```JSX
import React, { Component } from "react";

class User extends Component {
  state = { isLoggedIn: true };
  render() {
    if (this.state.isLoggedIn) {
      return <h1>Hello User</h1>;
    }
    return <h1>Hello Guest</h1>;
  }
}

export default User;
```

### If Else with variable

```JSX
import React, { Component } from "react";

class User extends Component {
  state = { isLoggedIn: true };
  render() {
    let message;
    if (this.state.isLoggedIn) {
      message = <h1>Welcome User</h1>;
    } else {
      message = <h1>Welcome Guest</h1>;
    }
    return <div>{message}</div>;
  }
}

export default User;
```

### Ternary Operator

```JSX
import React, { Component } from "react";

class User extends Component {
  state = { isLoggedIn: true };
  render() {
    return this.state.isLoggedIn ? (
      <h1>Welcome User</h1>
    ) : (
      <h1>Welcome Guest</h1>
    );
  }
}

export default User;
```

### Short Circuit / && Condition checking

```JSX
import React, { Component } from "react";

class User extends Component {
  state = { isLoggedIn: false };
  render() {
    return this.state.isLoggedIn && <h1>Welcome User</h1>;
  }
}

export default User;
```

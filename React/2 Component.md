## Components

- Components describe a part of user interface.
- they are reusable and can be nested inside other components.
- Always start component names with a capital letter.

### Two Types of Components:

- Stateless Functional Components
- Stateful Class Components

### Funtional Components

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### Class Components

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### Functional vs Class Components:

#### Funtional

- Simple Functions
- Use Func Component as mush as possible
- Absance of "this" keyword
- Mainly Responsible for the UI
- Stateless/ Dumb/ Presentational components

#### Class

- More Feature Rich
- Maintain there own private data state
- Complex UI Logic
- Private life cycle hooks
- Stateful/Smart/Container components

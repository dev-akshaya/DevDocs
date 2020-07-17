## Lifecycle Methods:

### Mounting

- when an instance of a component is being created and inserted into the DOM
- it has 4 methods

1. constructor
2. static getDerivedStateFromProps
3. render
4. componentDidMount

### Updating

- When a component is being re-rendered as a result of changes to either its props/state
- it has 5 methods

1. static getDerivedStateFromProps
2. shouldComponentUpdate
3. render
4. getSnapshotBeforeUpdate
5. componentDidUpdate

### Unmounting

- when a component is being removed from the DOM
- one method: componentWillUnmount

### Error Handling

- When there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
- it has 2 methods

1. static getDerivedStateFromError
2. componentDidCatch



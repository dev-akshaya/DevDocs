### React Fragments

> Syntax

```JSX
<React.Fragment>
  <h2> child1 </h2>
  <p> child2 </p>
</React.Fragment>
```

```JSX
<>
  <h2> child1 </h2>
  <p> child2 </p>
</>
```

### Why we use Fragments?

1. It makes the execution of code faster as compared to the div tag.
2. It takes less memory.

Note : Key is the only attributes that can be passed with the Fragments.

```JSX
{props.items.data.map(item => (
  <React.Fragment key={item.id}>
    <h2>{item.name}</h2>
    <p>{item.url}</p>
    <p>{item.description}</p>
  </React.Fragment>
))}
```

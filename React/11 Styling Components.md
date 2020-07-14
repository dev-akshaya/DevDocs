## Styling React Components

### CSS Styles

### Inline Styling

```CSS
.primary {
  color: orange;
}
```

```JSX
function Comp(props) {
  let className = props.primary ? 'primary' : ""
  return (
    <div>
      <h1 className={className}>Styled Components</h1>
    </div>
  )
}

export default Comp;
```

### CSS Modules

```JSX
import styles from "./appStyles.module.css";

<h1 className={styles.success}>Success</h1>
```

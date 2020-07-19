## Portals

- we can render elements as well as components outside of the root elment
- its mainly used to create pop-up or external windows

> Add an id in index.html

```HTML
<div id="portal_root"></div>
```

> Create an element and render it

```JSX
import React from "react";
import ReactDOM from "react-dom";

const Portal = () => {
  return ReactDOM.createPortal(
    <h1>Portal DOM</h1>,
    document.getElementById("portal_root")
  );
};

export default Portal;
```

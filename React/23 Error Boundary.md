## Error Boundary

- A class component that implements either one or both of the lifecycle methods getDerivedStateFromError or componentDidCatch becomes an error boundary.
- The static method getDerivedStateFromError method is used to render a fallback UI after an error is thrown and the componentDidCatch method is used to log the error information.

```JSX
// Error Component
import React from "react";

const Hero = ({ heroname }) => {
  if (heroname === "Jocker") {
    throw new Error("Not a Hero");
  }
  return <div>{heroname}</div>;
};

export default Hero;
```

```JSX
// Error Handeling Component
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something Went Wrong</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
```

```JSX
// Main App Component
import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroname="Iron Man" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroname="Hulk" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroname="Jocker" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
```

### Summary

- Error boundaries are React components that catch JavaScript error in their child component tree, log those errors, and display a fall-back UI.
- A class component becomes an Error Boundary by defining either or both of getDerivedStateFromError and componentDidCatch lifecycle methods.

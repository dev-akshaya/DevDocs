### Props are Read-Only

- Note: React Props are read-only! You will get an error if you try to change their value.
- Props are arguments passed into React components.
- To send props into a component, use the same syntax as HTML attributes:

```JSX
const myelement = <Car brand="Ford" />;
```

### props as "string" :

```JSX
class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
      </div>
    );
  }
}

ReactDOM.render(<Garage />, document.getElementById('root'));
```

### props as js-variable

```JSX
class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    const carname = "Ford";
    return (
      <div>
      <h1>Who lives in my garage?</h1>
      <Car brand={carname} />
      </div>
    );
  }
}

ReactDOM.render(<Garage />, document.getElementById('root'));
```

### props as objects

```JSX
class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand.model}!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    const carinfo = {name: "Ford", model: "Mustang"};
    return (
      <div>
      <h1>Who lives in my garage?</h1>
      <Car brand={carinfo} />
      </div>
    );
  }
}

ReactDOM.render(<Garage />, document.getElementById('root'));
```

### props in the Constructor

```JSX
class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a Car!</h2>;
  }
}

ReactDOM.render(<Car model="Mustang"/>, document.getElementById('root'));
```

### Default Props

```JSX
// App.js
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
         </div>
      );
   }
}
App.defaultProps = {
   headerProp: "Header from props...",
   contentProp:"Content from props..."
}
export default App;
```

```JSX
// main.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App/>, document.getElementById('app'));
```

### Combine State and Props

```JSX
// App.js
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        header: "Header from props...",
        content: "Content from props..."
    }
  }
  render() {
    return (
        <div>
          <Header headerProp = {this.state.header}/>
          <Content contentProp = {this.state.content}/>
        </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
        <div>
          <h1>{this.props.headerProp}</h1>
        </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
        <div>
          <h2>{this.props.contentProp}</h2>
        </div>
    );
  }
}

export default App;
```

```JSX
// main.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App/>, document.getElementById('app'));
```

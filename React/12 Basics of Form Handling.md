### Basics of Form Handling

```JSX
import React, { Component } from "react";

class Forms extends Component {
  state = { username: "", comment: "", topic: "" };

  handleSubmitt = (event) => {
    event.preventDefault();
    console.log("Submit Events");
  };

  handleUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  handleComment = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleTopic = (event) => {
    this.setState({ topic: event.target.value });
    console.log(this.state.topic);
  };

  render() {
    const { username, comment, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmitt}>
        <div>
          <label>UserName</label>
          <input type="text" value={username} onChange={this.handleUsername} />
        </div>

        <div>
          <label>Comments</label>
          <textarea
            cols="30"
            rows="10"
            value={comment}
            onChange={this.handleComment}
          ></textarea>
        </div>

        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleTopic}>
            <option value="React">React</option>
            <option value="React">Hooks</option>
            <option value="React">JS</option>
            <option value="React">NodeJS</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Forms;
```

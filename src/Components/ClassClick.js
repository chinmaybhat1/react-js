import React, { Component } from 'react';

class ClassClick extends Component {

    clickEventHandler() {
        console.log("Class click handler");
    }

  render() {
    return (
      <div>
        <button onClick={this.clickEventHandler}>Click me</button>
      </div>
    );
  }
}

export default ClassClick
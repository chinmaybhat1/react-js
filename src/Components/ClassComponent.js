import React, { Component } from 'react';



class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>The capital city of {this.props.state} is {this.props.capital}</h1>
      </div>
    );
  }
}

export default ClassComponent;
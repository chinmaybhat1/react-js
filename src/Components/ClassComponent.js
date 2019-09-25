import React, { Component } from 'react';



class ClassComponent extends Component {
  render() {
    const {state} = this.props
    return (
      <div>
        <h1>The capital city of {state} is {this.props.capital}</h1>
      </div>
    );
  }
}

export default ClassComponent;
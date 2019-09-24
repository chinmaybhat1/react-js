import React, { Component } from 'react';

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Click here to subscribe' 
        }
    }

    changeMessageHandler = () => {
        console.log("Change Message handler called.")
        this.setState({
            message: 'Thanks for subscribing'
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessageHandler}>Subscribe</button>
      </div>
    );
  }
}

export default Message

import React, { Component } from 'react';

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "Sample text"
      }
    //   Approach 3 : Recomended and binds object only once
      //this.handleClickEvent = this.handleClickEvent.bind(this)
    }
    

    // handleClickEvent() {
    //     this.setState({
    //         message: "Button clicked"
    //     })
    // }
    
    //Approach 4 : Most recomended
    handleClickEvent = () => {
        this.setState({
            message: "Button clicked"
        })
    }
  
    render() {
    return (
      <div>
          <p>{this.state.message}</p>
          {/* Approach 1 : Binds each time  and rerenders on event change*/}
        {/* <button onClick={this.handleClickEvent.bind(this)}>Click</button> */}
        {/* Approach 2 */}
        {/* <button onClick={() => this.handleClickEvent()}>Click</button> */}

        <button onClick={this.handleClickEvent}>Click</button>
      </div>
    );
  }
}

export default EventBind
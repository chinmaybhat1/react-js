import React, { Component } from 'react';

class RefsDemo extends Component {
    constructor(props) {
      super(props)
      this.createRef = React.createRef()
      this.callbackRef = null
      this.setCallbackref = (element) => {
        this.callbackRef = element
      }
    }

    componentDidMount(){
        //this.createRef.current.focus()
        if(this.callbackRef){
            this.callbackRef.focus()
        }
    }

    clickHandler = () => {
        // alert(this.createRef.current.value)
        alert(this.callbackRef.value)
    }
    
  render() {
    return (
      <div>
        {/* <input type='text' ref={this.createRef}/> */}
        <input type='text' ref={this.setCallbackref}/>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;

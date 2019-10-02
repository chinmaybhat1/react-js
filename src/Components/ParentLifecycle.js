import React, { Component } from 'react';
import ChildLifecycle from './ChildLifecycle';

class ParentLifecycle extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name: 'Chinmay'
        }
        console.log('Parent lifecycle constructor');
      }
  
      static getDerivedStateFromProps(props, state){
          console.log('Parent lifecycle getDerivedStateFromProps');
          return null;
      }
  
      componentDidMount(){
          console.log('Parent lifecycle componentDidMount');
      }

      shouldComponentUpdate(){
        console.log('Parent lifecycle shouldComponentUpdate');
        return true
      }

      getSnapshotBeforeUpdate(prevPrps, prevState){
        console.log('Parent lifecycle getSnapshotBeforeUpdate');
        return null;
      }

      componentDidUpdate(){
        console.log('Parent lifecycle componentDidUpdate');
      }

      changeState = () => {
        this.setState({
          name: 'State changed'
        })
      }
      
    render() {
      console.log('Parent lifecycle render');
      return ( 
          <div>
            <h1>ParentLifecycle</h1>
            <button onClick={this.changeState}>Change state</button>
            <ChildLifecycle/>
          </div>
      );
    }
}

export default ParentLifecycle;

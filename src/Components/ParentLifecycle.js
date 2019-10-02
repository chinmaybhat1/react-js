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
      
    render() {
      console.log('Parent lifecycle render');
      return ( 
          <div>
            <h1>ParentLifecycle</h1>
            <ChildLifecycle/>
          </div>
      );
    }
}

export default ParentLifecycle;

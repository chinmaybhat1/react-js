import React, { Component } from 'react';

class ChildLifecycle extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name: 'Chinmay'
        }
        console.log('Child lifecycle constructor');
      }
  
      static getDerivedStateFromProps(props, state){
          console.log('Child lifecycle getDerivedStateFromProps');
          return null;
      }
  
      componentDidMount(){
          console.log('Child lifecycle componentDidMount');
      }
      
      shouldComponentUpdate(){
        console.log('Child lifecycle shouldComponentUpdate');
        return true
      }

      getSnapshotBeforeUpdate(prevPrps, prevState){
        console.log('Child lifecycle getSnapshotBeforeUpdate');
        return null;
      }

      componentDidUpdate(){
        console.log('Child lifecycle componentDidUpdate');
      }
    render() {
      console.log('Child lifecycle render');
      return ( 
          <div>
            <h1>ChildLifecycle</h1>
          </div>
      );
    }
}

export default ChildLifecycle;
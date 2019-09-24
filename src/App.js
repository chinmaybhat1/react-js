import React from 'react';
import logo from './logo.svg';
import './App.css';
import Functional from './Components/Functional';
import ClassComponent from './Components/ClassComponent';
import Message from './Components/Message';

function App() {
  return (
    <div className="App">
      {/* <Functional capital='Bengaluru' state='Karnataka'>One State. Many worlds</Functional>
      <ClassComponent capital='Thiruvananthapuram' state='Kerala'/> */}
      <Message/>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Functional from './Components/Functional';
import ClassComponent from './Components/ClassComponent';

function App() {
  return (
    <div className="App">
      <Functional/>
      <ClassComponent/>
    </div>
  );
}

export default App;

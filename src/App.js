import React from 'react';
import logo from './logo.svg';
import './App.css';
import Functional from './Components/Functional';
import ClassComponent from './Components/ClassComponent';
import Message from './Components/Message';
import FunctionalClick from './Components/FunctionalClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import ConditionalComponent from './Components/ConditionalComponent';
import NameList from './Components/NameList';
import Form from './Components/Form';
import ParentLifecycle from './Components/ParentLifecycle';
import Table from './Components/Table';
import RefsDemo from './Components/RefsDemo';

function App() {
  return (
    <div className="App">
      {/* <Functional capital='Bengaluru' state='Karnataka'>One State. Many worlds</Functional>
      <ClassComponent capital='Thiruvananthapuram' state='Kerala'/> */}
      {/* <Message/> */}
      {/* <FunctionalClick/>
      <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      {/* <ConditionalComponent /> */}
      {/* <NameList/> */}
      {/* <Form topic='react'/> */}
      {/* <ParentLifecycle/> */}
      {/* <Table /> */}
      <RefsDemo/>
    </div>
  );
}

export default App;

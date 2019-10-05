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
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';
import ClickCounter from './Components/ClickCounter';
import { UserProvider } from './Components/UserContext';
import PostList from './Components/HTTP/PostList';
import PostForm from './Components/HTTP/PostForm';

function App() {

  const loggedInUser = 'Chinmay'
  
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
      {/* <UserProvider value={loggedInUser}>
        <NameList />
      </UserProvider> */}
      {/* <Form topic='react'/> */}
      {/* <ParentLifecycle/> */}
      {/* <Table /> */}
      {/* <RefsDemo/> */}
      {/* <ErrorBoundary>
        <Hero heroName='Batman'/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName='Deadpool'/>
      </ErrorBoundary> */}
      {/* <ClickCounter/> */}


      {/* React with HTTP */}
      {/* <PostList/> */}
      <PostForm/>

    </div>
  );
}

export default App;

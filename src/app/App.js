import React from 'react';
import Header from './components'
import './App.css';
import TodoList from './components.js'


import './App.css';

// JSX i VirtualDOM

const TempComponent = ({text})=>{
  return (<h1>{text}</h1>)
}


// const Component = (props) => {
  // return (html)
// }


const BlueDiv = ({children})=>{
  return (
    <div style={{background:'blue', padding:10}}>
    <h2>test1</h2>
      {children}
    </div>
  )
}

const RedDiv = ()=>{
  return (
    <div style={{background:'red'}}>
      test2
    </div>
  )
}

const App = () => {
  return (
    <div className="app">
    <BlueDiv>
      <RedDiv/>
      <RedDiv/>
      <RedDiv/>
      <RedDiv/>
    </BlueDiv>
    </div>
  );
}

export default App;

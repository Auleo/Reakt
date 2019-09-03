import React from 'react';
import './App.css';

const TempComponent = ({text})=>{
  return (<h1>{text}</h1>)
}


// const Component = (props) => {
  // return (html)
// }



const App = () => {
  return (
    <div className="app">

      <TempComponent text="hello world"/>

    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

const tempData = {
  name:'P',
  surname:'J'
}

const TempComponent = ({text})=>{
  return (<h1>{text}</h1>)
}

const App = () => {

  const {name, surname} = tempData
  return (
    <div className="app">
      <TempComponent text="hello world"/>
    </div>
  );
}

export default App;

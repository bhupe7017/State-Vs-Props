import React from 'react';
import './App.css';
import State from './PropsVsState/State';
import Props from './PropsVsState/Props';


function App() {

  function getData(){
    alert("Hello This Is Props")
  }
  return (
    <div className="App">
      <State />
      <Props data={getData} />
    </div>
  );
}

export default App;

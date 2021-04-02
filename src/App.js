import React from 'react'
// import './App.css';
import './style.css'
import Block from './components/Block'
import Header from './components/Header'

const App = () => {

  return (
    <div className="page">
      <Header />
      <div className="wrapper">
        <Block />
      </div>
    </div>
  );
}

export default App;

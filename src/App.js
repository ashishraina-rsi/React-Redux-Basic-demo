import './App.css';
import React , { Component } from 'react'
import  Counter from './containers/counter'

class App extends Component{
  render(){
    return (
      <div className="App">
        <p>Redux Basics</p>
        <Counter/>
      </div>
    );
  }
}

export default App;




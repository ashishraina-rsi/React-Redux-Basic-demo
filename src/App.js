import './App.css';
import React , { Component } from 'react'
import  Counter from './containers/counter'
import Personlist from './containers/personlist';

class App extends Component{
  render(){
    return (
      <div className="App">
        <p>Redux Basics</p>
        <Counter/>
        <Personlist />
      </div>
    );
  }
}

export default App;



